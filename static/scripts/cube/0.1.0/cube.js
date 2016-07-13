import React from 'react';
window.React = React;

import ReactDOM from 'react-dom';
window.ReactDOM = ReactDOM;

String.prototype.equalsIgnoreCase = function (str) {
    if (str == null) return false;
    return this.toLowerCase() === str.toLowerCase();
};

Array.prototype.removeAt = function (index) {
    if (index >= 0)
        return this.splice(index, 1);
};

window.cb = {};

cb.utils = {};
cb.utils.queryString = function (url) {
    this.pathname = '';
    this.query = {};

    this.init = function () {
        if (!url) url = location.search;
        var index1 = url.indexOf('?');
        var index2 = url.indexOf('#');
        if (index1 >= 0) {
            this.pathname = url.substr(0, index1);
            url = index2 < 0 ? url.substr(index1 + 1) : url.substring(index1 + 1, index2);
            if (url.length > 0) {
                url = url.replace(/\+/g, ' ');
                var params = url.split('&');
                for (var i = 0, len = params.length; i < len; i++) {
                    var param = params[i].split('=');
                    var key = decodeURIComponent(param[0]);
                    var value = (param.length == 2) ? decodeURIComponent(param[1]) : key;
                    this.query[key] = value;
                }
            }
        } else {
            this.pathname = url;
        }
    };

    this.set = function (key, value) {
        this.query[key] = value;
    };

    this.get = function (key) {
        return this.query[key];
    };

    this.has = function (key) {
        return this.query[key] != null;
    };

    this.toStr = function () {
        var items = ['?'];
        for (var key in this.query) {
            items.push(encodeURIComponent(key));
            items.push('=');
            items.push(encodeURIComponent(this.query[key]));
            items.push('&');
        }
        if (items.length === 1) {
            return '';
        } else {
            items.removeAt(items.length - 1);
            return items.join('');
        }
    };

    this.init();
};
cb.utils.browser = function () {
    if (!!window.ActiveXObject || 'ActiveXObject' in window)
        return 'IE';
    return null;
};
cb.utils.isArray = function (arr) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(arr);
    }

    return Object.prototype.toString.call(arr) === '[object Array]';
};
cb.utils.isPlainObject = function (obj) {
    if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
        return false;
    }

    var hasOwnConstructor = Object.prototype.hasOwnProperty.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for (key in obj) {/**/ }

    return typeof key === 'undefined' || Object.prototype.hasOwnProperty.call(obj, key);
};
cb.utils.extend = function () {
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[0],
        i = 1,
        length = arguments.length,
        deep = false;

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    } else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
        target = {};
    }

    for (; i < length; ++i) {
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) {
            // Extend the base object
            for (name in options) {
                src = target[name];
                copy = options[name];

                // Prevent never-ending loop
                if (target !== copy) {
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && this.isArray(src) ? src : [];
                        } else {
                            clone = src && this.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = this.extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (typeof copy !== 'undefined') {
                        target[name] = copy;
                    }
                }
            }
        }
    }

    // Return the modified object
    return target;
};
cb.utils.getNewId = function (prefix) {
    var number = (cb.cache.newIds.get(prefix) || 0) + 1;
    cb.cache.newIds.set(prefix, number);
    return prefix + '_' + number;
};

cb.events = {};
cb.events.on = function (name, callback, context) {
    if (!name || !callback) return;
    this._events || (this._events = {});
    var events = this._events[name] || (this._events[name] = []);
    events.push({ callback: callback, context: context });
};
cb.events.un = function (name, callback) {
    if (!name || !this._events || !this._events[name]) return;
    if (!callback) {
        delete this._events[name];
    } else {
        var index = this._events[name].findIndex(function (value) {
            if (value.callback === callback)
                return true;
        });
        if (index !== -1)
            this._events[name].removeData(this._events[name][index]);
    }
};
cb.events.hasEvent = function (name) {
    if (!name) return;
    return this._events && this._events[name] && this._events[name].length;
};
cb.events.execute = function (name) {
    if (!name) return;
    var events = this._events ? this._events[name] : null;
    if (!events) return true;
    var result = true;
    var args = Array.prototype.slice.call(arguments, 1);
    events.forEach(function (event) {
        result = event.callback.apply(event.context || this, args) === false ? false : result;
    }, this);
    return result;
};

cb.models = {};
cb.models.register = function (modelType, func) {
    cb.models[modelType] = func(modelType);
};
cb.models.register('BaseModel', function (modelType) {
    var model = function (data) {
        var propertyNames = [];
        if (data)
            for (var propertyName in data)
                propertyNames.push(propertyName);
        var _data = cb.utils.extend({}, { listeners:[], propertyNames: propertyNames }, data);

        this._get_data = function (key) {

            if (!key) return;
            return _data[key];
        };

        this._set_data = function (key, value) {
            if (!key) return;
            _data[key] = value;
        };

        this._del_data = function (key) {
            if (!key) return;
            delete _data[key];
        };
    };
    model.prototype.modelType = modelType;

    model.prototype.setParent = function (parent) {
        this._set_data('parent', parent);
    };

    model.prototype.getParent = function () {
        return this._get_data('parent');
    };

    model.prototype.setName = function (name) {
        this._set_data('name', name);
    };

    model.prototype.getName = function () {
        return this._get_data('name');
    };

    model.prototype.addListener = function (listener) {
        var listeners = this._get_data('listeners');
        if (listeners.indexOf(listener) >= 0) return;
        listeners.push(listener);
        this.setData();
    };

    model.prototype.setData = function (name, value) {
        if (!arguments.length) {
            var propertyNames = this._get_data('propertyNames');
            propertyNames.forEach(function (propertyName) {
                this.setData(propertyName, this.getData(propertyName));
            });
        }
        if (arguments.length === 2) {
            this._set_data(name, value);
            var state = {};
            state[name] = value;
            this.doPropertyChange('setState', state);
            return;
        }
        if (typeof name === 'object') {
            for (var attr in name)
                this.setData(attr, name[attr]);
        } else {
            this.setData('value', name);
        }
    };

    model.prototype.getData = function (name) {
        return this._get_data(name);
    };

    model.prototype.setDirty = function (dirty) {
        if (dirty) {
            this._set_data('isDirty', true);
            return;
        }
        this._del_data('isDirty');
        this._set_data('originalData', this.getData('value'));
    };

    model.prototype.getDirty = function () {
        if (this._get_data('isDirty'))
            return true;
        return !(this.getData('value') === this._get_data('originalData'));
    };

    model.prototype.setState = function (name, value, ctrlName) {
        if (!ctrlName)
            this._set_data(name, value);
        var state = {};
        state[name] = value;
        this.doPropertyChange('setState', state, ctrlName);
    };

    model.prototype.getState = function (name, ctrlName) {
        if (!ctrlName)
            return this._get_data(name);
        var listeners = this._get_data('listeners');
        var listener = listeners.find(function (item) {
            return item.ctrlName === ctrlName;
        });
        if (!listener)
            return this._get_data(name);
        return listener.getState(name);
    };

    model.prototype.fireEvent = function (eventName, args) {
        if (!this.execute('before' + eventName, args)) return;
        this.execute(eventName, args);
        this.execute('after' + eventName, args);
    };

    model.prototype.setProxy = function (config) {
        if (config instanceof cb.rest.DynamicProxy)
            this._set_data('proxy', config);
        else
            this._set_data('proxy', cb.rest.DynamicProxy.create(config));
    };

    model.prototype.getProxy = function () {
        return this._get_data('proxy');
    };

    model.prototype.doPropertyChange = function (name, value, ctrlName) {
        var listeners = this._get_data('listeners');
        if (!listeners.length) return;
        if (!ctrlName) {
            listeners.forEach(function (item) {
                if (typeof item[name] !== 'function') return;
                item[name](value);
            });
        } else {
            var listener = listeners.find(function (item) {
                return item.ctrlName === ctrlName;
            });
            if (!listener || typeof listener[name] !== 'function') return;
            listener[name](value);
        }
    };

    return model;
});
cb.utils.extend(cb.models.BaseModel.prototype, cb.events);

cb.models.register('SimpleModel', function (modelType) {
    var model = function (data) {
        cb.models.BaseModel.call(this, data);
    };
    model.prototype = new cb.models.BaseModel();
    model.prototype.modelType = modelType;

    model.prototype.setValue = function (value) {
        var oldValue = this.getValue();
        if (value === oldValue) return;
        var data = { value: value, oldValue: oldValue };
        if (!this.execute('beforeValueChange', data)) return;
        this.setData('value', value);
        this.execute('afterValueChange', data);
    };

    model.prototype.getValue = function () {
        return this.getData('value');
    };

    model.prototype.setReadOnly = function (value, ctrlName) {
        this.setState('readOnly', value, ctrlName);
    };

    model.prototype.getReadOnly = function (ctrlName) {
        return this.getState('readOnly', ctrlName);
    };

    return model;
});

cb.models.DataStates = {
    Add: 2,
    Delete: 3,
    Update: 1,
    Unchanged: 0,
    Missing: undefined
};

cb.models.register('GridModel', function (modelType) {
    var model = function (data) {
        var defaults = {
            columns: {},
            rows: [],
            readOnly: true,
            dataSourceMode: 'local',
            editMode: 'cell',
            autoWrap: true,
            mergeCells: false,
            showAggregates: false,
            multiSort: true,
            sortFields: [],
            showCheckBox: true,
            showRowNo: true,
            pagination: false,
            pageSize: 50,
            pageIndex: 0,
            focusedRowIndex: -1,
            innerUsedAttrs: {
                id: '_$id',
                isSelected: '_$isSelected'
            }
        };
        data = cb.utils.extend({}, defaults, data);
        if (!data.fieldNames)
            data.fieldNames = getFieldNames(data.columns);
        cb.models.BaseModel.call(this, data);
        if (data.rows.length) {
            setIds.call(this, data.rows);
            initRowState.call(this);
        }
    };
    model.prototype = new cb.models.BaseModel();
    model.prototype.modelType = modelType;

    model.prototype.getPkName = function () {
        var columns = this._get_data('columns');
        for (var field in columns) {
            var col = columns[field];
            if (typeof col === 'object' && col['isKey'])
                return field;
        }
        return 'id';
    };

    model.prototype.getTsName = function () {
        return 'ts';
    };

    model.prototype.setData = function (data) {
        if (!data) {
            var propertyNames = this._get_data('propertyNames');
            var data = {};
            propertyNames.forEach(function (key) {
                data[key] = this._get_data(key);
            }, this);
            this.doPropertyChange('setGridProps', data);
            return;
        }
        if (data.columns)
            this.setColumns(data.columns, cb.utils.isArray(data.fieldNames)?data.fieldNames:null);
    };

    model.prototype.getDirtyData = function () {
        var pkName = this.getPkName();
        var tsName = this.getTsName();
        var data = [];
        var rows = this._get_data('rows');
        var rowsDataState = this._get_data('rowsDataState'), dataState;
        for (var i = 0; i < rows.length; i++) {
            dataState = rowsDataState[i];
            var rowData = cb.utils.extend(true, {}, rows[i]);
            if (dataState === cb.models.DataStates.Update || dataState === cb.models.DataStates.Add) {
                delete rowData.readOnly;
                delete rowData.disabled;
                for (var attr in rowData) {
                    var cell = rowData[attr];
                    rowData[attr] = typeof cell === 'object' ? cell.value : cell;
                }
                rowData.state = dataState;
                data.push(rowData);
            } else if (dataState === cb.models.DataStates.Delete) {
                var row = {};
                row[pkName] = rowData[pkName];
                row[tsName] = rowData[tsName];
                row.state = dataState;
                data.push(row);
            }
        }
        return data.length?data:null;
    };

    model.prototype.getData = function () {
        var pkName = this.getPkName();
        var tsName = this.getTsName();
        var data = [];
        var rows = this._get_data('rows');
        var rowsDataState = this._get_data('rowsDataState'), dataState;
        for (var i = 0; i < rows.length; i++) {
            dataState = rowsDataState[i];
            if (dataState !== cb.models.DataStates.Delete || dataState !== cb.models.DataStates.Missing) {
                var rowData = cb.utils.extend(true, {}, rows[i]);
                delete rowData.readOnly;
                delete rowData.disabled;
                for (var attr in rowData) {
                    var cell = rowData[attr];
                    rows[i][attr] = typeof cell === 'object' ? cell.value : cell;
                }
                rowData.state = dataState;
                data.push(rowData);
            }
        }
        return data.length?data:null;
    };

    var initRowState = function () {
        var ds = this._get_data('rows');
        var rowsDataState = new Array(ds.length);
        for (var i = 0, len = ds.length; i < len; i++)
            rowsDataState[i] = ds[i]?cb.models.DataStates.UnChanged:cb.models.DataStates.Missing;
        this._set_data('rowsDataState', rowsDataState);
    };

    model.prototype.getColumns = function (fields) {
        var columns = this._get_data('columns');
        var column, ret;
        if (!fields) {
            for (var attr in columns) {
                column = cb.utils.extend(true, {}, columns[attr]);
                if (!column.fieldName)
                    column.fieldName = attr;
                ret.push(column);
            }
        } else {
            if (!cb.utils.isArray(fields))
                fields = [fields];
            fields.forEach(function (field) {
                column = cb.utils.extend(true, {}, columns[field]);
                if (!column.fieldName)
                    column.fieldName = field;
                ret.push(column);
            });
        }
        return ret;
    };

    model.prototype.getColumn = function (field) {
        var column = cb.utils.extend(true, {}, this._get_data('columns')[field]);
        if (!column.fieldName)
            column.fieldName = field;
        return column;
    };

    model.prototype.hasColumn = function (field) {
        return this._get_data('columns').hasOwnProperty(field);
    };

    var getFieldNames = function (columns) {
        var fieldNames = [];
        for (var field in columns)
            fieldNames.push(field);
        return fieldNames;
    };

    model.prototype.setDirty = function (dirty) {
        if (dirty) {
            this._set_data('isDirty', true);
            return;
        }
        this._del_data('isDirty');
        this._set_data('originalData', this.getData());
    };

    model.prototype.getCellValue = function (rowIndex, cellName) {
        var row = rowIndex >= 0?this._get_data('rows')[rowIndex]:null;
        if (!row || !cellName)
            return row;
        var cell = row[cellName];
        return (cell && typeof cell === 'object')?cell.value:cell;
    };

    model.prototype.setCellValue = function (rowIndex, cellName, value) {
        var row = rowIndex >= 0? this._get_data('rows')[rowIndex]:null;
        if (!row || !cellName) return;
        var oldValue = this.getCellValue(rowIndex, cellName);
        if (oldValue === value) return;
        var data = { rowIndex: rowIndex, cellName: cellName, value: value, oldValue: oldValue };
        if (!this.execute('beforeCellValueChange', data)) return;
        var cell = row[cellName];
        this.updateRowState(rowIndex, cb.models.DataStates.Update);
        this.doPropertyChange('setCellValue', data);
        this.execute('afterCellValueChange', data);
    };

    model.prototype.getState = function (name) {
        return this.get(name);
    };

    model.prototype.setState = function (name, value) {
        this.set(name, value);
    };

    model.prototype.getRowState = function (rowIndex, name) {
        var row = rowIndex >= 0?this._get_data('rows')[rowIndex]:null;
        if (!row || !name) return;
        return row[name];
    };

    model.prototype.setRowState = function (rowIndex, name, value) {
        var row = rowIndex >= 0?this._get_data('rows')[rowIndex]:null;
        if (!row || !name) return;
        var oldValue = this.getRowState(rowIndex, name);
        if (oldValue === value) return;
        var data = { rowIndex: rowIndex, propertyName: name, value: value, oldValue: oldValue };
        if (!this.execute('beforeRowStateChange', data)) return;
        this._get_data('rows')[rowIndex][name] = value;
        this.doPropertyChange('setRowState', data);
        this.execute('afterRowStateChange', data);
    };

    model.prototype.getColumnState = function (cellName, name) {
        var col = this._get_data('columns')[cellName];
        if (!col || !name) return;
        return col[name];
    };

    model.prototype.setColumnState = function (cellName, name, value) {
        var col = this._get_data('columns')[cellName];
        if (!col || !name) return;
        var oldValue = this.getColumnState(rowIndex, name);
        if (oldValue === value) return;
        var data = { cellName: cellName, propertyName: name, value: value, oldValue: oldValue };
        if (!this.execute('beforeColumnStateChange', data)) return;
        this._get_data('columns')[cellName][name] = value;
        this.doPropertyChange('setColumnState', data);
        this.execute('afterColumnStateChange', data);
    };

    model.prototype.getCellState = function (rowIndex, cellName, name) {
        var row = rowIndex >= 0?this._get_data('rows')[rowIndex]:null;
        if (!row || !cellName) return;
        var cell = row[cellName];
        return (cell && typeof cell === 'object')?cell[name]:undefined;
    };

    model.prototype.setCellState = function (rowIndex, cellName, name, value) {
        var row = rowIndex >= 0?this._get_data('rows')[rowIndex]:null;
        if (!row || !cellName) return;
        var cell = row[cellName];
        var oldValue = this.getCellState(rowIndex, cellName, name);
        if (oldValue === value) return;
        var data = { rowIndex: rowIndex, cellName: cellName, propertyName: name, value: value, oldValue: oldValue };
        if (!this.execute('beforeCellStateChange', data)) return;
        if (!cell)
            cell = this._get_data('rows')[rowIndex][cellName] = { value: cell };
        cell[name] = value;
        this.doPropertyChange('setCellState', data);
        this.execute('afterCellStateChange', data);
    };

    model.prototype.setColumns = function (columns, fieldNames) {
        if (!arguments.length) {
            var columns = this._get_data('columns');
            this.doPropertyChange('setGridProps', { columns: columns });
            return;
        }
        if (!this.execute('beforeSetColumns', columns)) return;
        this._set_data('columns', columns);
        this._set_data('fieldNames', fieldNames || getFieldNames(columns));
        this.doPropertyChange('setColumns', columns);
        this.execute('afterSetColumns', columns);
    };

    model.prototype.setDataSource = function (proxyConfig, queryParams) {
        if (!arguments.length) {
            var rows = this._get_data('rows');
            if (!rows.length) return;
            this.doPropertyChange('setGridProps', { dataSource: rows });
            return;
        }
        if (this._get_data('dataSourceMode') === 'local') {
            var data = cb.utils.isArray(proxyConfig)?proxyConfig:[proxyConfig];
            if (!this.execute('beforeSetDataSource', data)) return;
            this._set_data('rows', data);
            if (data.length) {
                setIds.call(this, data);
                initRowState.call(this);
            }
            this.doPropertyChange('setDataSource', data);
            this.execute('afterSetDataSource', data);
        } else {
            var proxy = cb.rest.DynamicProxy.create({ queryData: proxyConfig });
            var params = cb.utils.extend(true, {}, queryParams);
            params.pageSize = this.getPageSize();
            params.pageIndex = 0;
            proxy.queryData(params, function (err, result) {
                if (err) return;
                if (callback) {
                    callback(result);
                } else {
                    var data = cb.utils.isArray(result.data)?result.data:[result.data];
                    if (!this.execute('beforeSetDataSource', data)) return;
                    this._set_data('rows', data);
                    this.doPropertyChange('setDataSource', data);
                    this.execute('afterSetDataSource', data);
                }
            }, this);
        }
    };

    var setIds = function (rows) {
        var idFlag = this._get_data('innerUsedAttrs').id;
        rows.forEach(function (row) {
            row[idFlag] = cb.utils.getNewId('rowId');
        });
    };

    model.prototype.setPageSize = function (pageSize) {
        if (typeof pageSize !== 'number') return;
        pageSize = Math.max(-1, pageSize);
        this._set_data('pageSize', pageSize);
        this._set_data('pageIndex', 0);
    };

    model.prototype.getPageSize = function () {
        return this._get_data('pageSize');
    };

    model.prototype.select = function (rowIndexes) {
        if (!this.execute('beforeSelect')) return;
        if (!cb.utils.isArray(rowIndexes))
            rowIndexes = [rowIndexes];
        var selectedFlag = this._get_data('innerUsedAttrs').isSelected;
        rowIndexes.forEach(function (index) {
            this._get_data['rows'][index][selectedFlag] = true;
        }, this);
        this.doPropertyChange('select', rowIndexes);
        this.execute('afterSelect');

    };

    model.prototype.unselect = function (rowIndexes) {
        if (!this.execute('beforeUnselect')) return;
        if (!cb.utils.isArray(rowIndexes))
            rowIndexes = [rowIndexes];
        var selectedFlag = this._get_data('innerUsedAttrs').isSelected;
        rowIndexes.forEach(function (index) {
            this._get_data['rows'][index][selectedFlag] = false;
        }, this);
        this.doPropertyChange('unselect', rowIndexes);
        this.execute('afterUnselect');
    };

    model.prototype.selectAll = function () {
        if (!this.execute('beforeSelectAll')) return;
        var selectedFlag = this._get_data('innerUsedAttrs').isSelected;
        this._get_data['rows'].forEach(function (row) {
            row[selectedFlag] = true;
        });
        this.doPropertyChange('selectAll');
        this.execute('afterSelectAll');
    };

    model.prototype.unselectAll = function (rowIndexes) {
        if (!this.execute('beforeUnselectAll')) return;
        var selectedFlag = this._get_data('innerUsedAttrs').isSelected;
        this._get_data['rows'].forEach(function (row) {
            row[selectedFlag] = false;
        });
        this.doPropertyChange('unselectAll');
        this.execute('afterUnselectAll');
    };

    model.prototype.getSelectedRows = function () {
        var selectedRows = [];
        var selectedFlag = this._get_data('innerUsedAttrs').isSelected;
        var rowData;
        this._get_data['rows'].forEach(function (row) {
            if (!row[selectedFlag]) return;
            rowData = getRow(row);
            selectedRows.push(rowData);
        }, this);
        return selectedRows;
    };

    model.prototype.getRows = function () {
        var rows = [];
        this._get_data['rows'].forEach(function (row) {
            rows.push(this.getRow(row));
        }, this);
        return rows;
    };

    model.prototype.insertRow = function (rowIndex, rowData) {
        if (this.getReadOnly()) return;
        var row = cb.utils.extend(true, {}, getDefaultRowData(), rowData);
        setIds(rowData);
        var index = Math.min(this._get_data['rows'].length, Math.max(0, rowIndex));
        var data = { index: index, row: row };
        if (!this.execute('beforeInsertRow', data)) return;
        this._get_data('rows').splice(index, 0, row);
        this._get_data('rowsDataState').splice(index, 0, cb.models.DataStates.Add);
        this._focusedRowIndex = index;
        this.doPropertyChange('insertRow', data);
        this.execute('afterInsertRow', data);
    };

    model.prototype.insertRows = function (rowIndex, rowDatas) {
        if (this.getReadOnly() || !cb.utils.isArray(rowDatas)) return;
        var rows = [], row;
        rowDatas.forEach(function (rowData) {
            row = cb.utils.extend(true, {}, getDefaultRowData(), rowData);
        });
        setIds(rows);
        var index = Math.min(this._get_data['rows'].length, Math.max(0, rowIndex));
        var data = { index: index, rows: rows };
        if (!this.execute('beforeInsertRows', data)) return;
        this._get_data['rows'].splice.apply(this._get_data['rows'], [index, 0].concat(rows));
        var stateArray = new Array(rows.length);
        stateArray.forEach(function (state) {
            state = cb.models.DataStates.Add;
        });
        this._get_data('rowsDataState').splice.apply(this._get_data('rowsDataState'), [index, 0].concat(stateArray));
        this._set_data('focusedRowIndex', index);
        this.doPropertyChange('insertRow', data);
        this.execute('afterInsertRow', data);
    };

    model.prototype.appendRow = function (rowData) {
        if (this.getReadOnly()) return;
        var row = cb.utils.extend(true, {}, getDefaultRowData(), rowData);
        setIds(rowData);
        var index = this._get_data('rows').length;
        var data = { index: index, row: row };
        if (!this.execute('beforeInsertRow', data)) return;
        this._get_data('rows').push(row);
        this._get_data('rowsDataState').push(cb.models.DataStates.Add);
        this._set_data('focusedRowIndex', index);
        this.doPropertyChange('insertRow', data);
        this.execute('afterInsertRow', data);
    };

    model.prototype.deleteRows = function (rowIndexes) {
        if (this.getReadOnly()) return;
        if (!cb.utils.isArray(rowIndexes))
            rowIndexes = [rowIndexes];
        var rows = this.getRowsByIndexes(rowIndexes);
        if (!this.execute('beforeDeleteRows', rows)) return;
        var rows = this._get_data['rows'],
            rowsDataState = this._get_data('rowsDataState'),
            length = this._get_data['rows'].length,
            rowIndexes = rowIndexes.sort(function (i, j) { return i - j; }),
            rowIndex;
        for (var i = rowIndexes.length - 1; i >= 0; i--) {
            rowIndex = rowIndexes[i];
            if (rowIndex < 0 || rowIndex >= length) continue;
            if (rowsDataState[rowIndex] === cb.models.DataStates.Add) {
                rowsDataState.splice(rowIndex, 1);
                rows.splice(rowIndex, 1);
            } else {
                rowsDataState[rowIndex] = cb.models.DataStates.Delete;
            }
        }
    };

    model.prototype.getRowsByIndexes = function (rowIndexes) {
        var rows = [];
        if (!cb.utils.isArray(rowIndexes))
            rowIndexes = [rowIndexes];
        rowIndexes.forEach(function (rowIndex) {
            rows.push(this.getRow(rowIndex));
        });
        return rows;
    };

    model.prototype.getRow = function (rowIndex) {
        return getRow(this._get_data['rows'][rowIndex]);
    };

    var getRow = function (row) {
        var rowData = cb.utils.extend(true, {}, row);
        delete rowData[this._get_data('innerUsedAttrs').id];
        delete rowData[this._get_data('innerUsedAttrs').isSelected];
        for (var field in rowData) {
            if (typeof rowData[field] !== 'object') continue;
            rowData[field] = rowData[field].value || rowData[field].defaultValue;
        }
        return rowData;
    };

    var getDefaultRowData = function () {
        var rowData = {};
        var cols = this._get_data['columns'];
        var col;
        for (var field in cols) {
            col = cols[field];
            if (col.defaultValue == null) continue;
            rowData[field] = col.defaultValue;
        }
        return rowData;
    };

    return model;
});

cb.models.register('ContainerModel', function (modelType) {
    var model = function () {
        cb.models.BaseModel.call(this);
    };
    model.prototype = new cb.models.BaseModel();
    model.prototype.modelType = modelType;

    model.prototype.set = function (propertyName, value) {
        value.setParent(this);
        value.setName(propertyName);
        this._set_data(propertyName, value);
    };

    model.prototype.get = function (propertyName) {
        return this._get_data(propertyName);
    };

    model.prototype.setData = function (data) {
        var propertyNames = [];
        for (var propertyName in data) {
            propertyNames.push(propertyName);
            var value = data[propertyName];
            var property = this.get(propertyName);
            property && property.setData ? property.setData(value) : this.set(propertyName, value);
        }
        this._set_data('propertyNames', propertyNames);
    };

    model.prototype.getData = function () {
        var propertyNames = this._get_data('propertyName');
        var rawData = null;
        var property;
        propertyNames.forEach(function (propertyName) {
            property = this.get(propertyName);
            if (!property) return;
            if (!rawData)
                rawData = {};
            var value = property.getData('value');
            rawData[propertyName] = value;
        });
        return rowData;
    };

    model.prototype.setDirty = function (dirty) {
        if (dirty) {
            this._set_data('isDirty', true);
            return;
        }
        this._del_data('isDirty');
        var propertyNames = this._get_data('propertyNames');
        var property;
        propertyNames.forEach(function (propertyName) {
            property = this.get(propertyName);
            if (!property) return;
            property.setDirty(dirty);
        }, this);
    };

    model.prototype.getDirtyData = function () {
        var data = this._data;
        var dirtyData = null;
        var property;
        for (var propertyName in data) {
            property = this.get(propertyName);
            if (!property || !property.getDirty()) continue;
            if (!dirtyData)
                dirtyData = {};
            var value = property.getData('value');
            dirtyData[propertyName] = value;
        }
        return dirtyData;
    };

    model.prototype.collectData = function (all) {
        return all ? this.getData() : this.getDirtyData();
    };

    return model;
});

cb.controls = {};


cb.cache = {
    get: function (cacheName) {
        return this[cacheName];
    },
    set: function (cacheName, value) {
        this[cacheName] = value;
    },
    clear: function () {
        for (var attr in this)
            if (attr !== 'get' && attr !== 'set' && attr !== 'clear')
                delete this[attr];
    }
};
cb.cache.newIds = { get: cb.cache.get, set: cb.cache.set, clear: cb.cache.clear };

cb.viewmodels = {};
cb.viewmodels.register = function (modelType, func) {
    cb.viewmodels[modelType] = func(modelType);
};

cb.views = {};

cb.init = function (symbol, viewContainer) {
    var ext_scripts =[];
    ext_scripts.push("javascripts/common/Voucher.js");
    $script(ext_scripts, function () {
        Voucher.init(symbol,viewContainer);
    });
};

cb.rest = {};
cb.rest._getUrl = function (restUrl, params) {
    var context = cb.rest.AppContext;
    var queryString = new cb.utils.queryString(restUrl);
    if (cb.utils.browser() === 'IE' || params && params.refresh)
        queryString.set('_', new Date().valueOf());
    if (params && params.token)
        queryString.set('token', context.token || '');
    restUrl = queryString.pathname + queryString.toStr();
    if (restUrl.indexOf('http://') < 0) {
        if (restUrl.substr(0, 1) !== '/')
            restUrl = '/' + restUrl;
        restUrl = context.serviceUrl + restUrl;
    }
    return restUrl;
};
cb.rest._appendUrl = function (restUrl, params) {
    if (!params) return restUrl;
    var queryStr = [];
    for (var attr in params) {
        queryStr.push(attr + '=' + params[attr]);
    }
    if (!queryStr.length) return restUrl;
    var queryString = queryStr.join('&');
    return restUrl.indexOf('?') >= 0 ? (restUrl + '&' + queryString) : (restUrl + '?' + queryString);
};
cb.rest.DynamicProxy = function (config) {
    if (this.init)
        this.init(config);
};
cb.rest.DynamicProxy.create = function (config) {
    return new cb.rest.DynamicProxy(config);
};
cb.rest.DynamicProxy.prototype.init = function (config) {
    if (!config) return;
    this.config = config;
    for (var attr in this.config) {
        this[attr] = (function (attr) {
            return function (data, callback, context) {
                return this.Do(attr, data, callback, null, context);
            }
        })(attr);
        this[attr + 'Sync'] = (function (attr) {
            return function (data) {
                return this.Do(attr, data, null, false);
            }
        })(attr);
    }
};
cb.rest.DynamicProxy.prototype.Do = function (op, data, callback, async, context) {
    if (!this.config || !this.config[op] || !this.config[op].url) return;
    var config = this.config[op];
    var restUrl = config.url;
    var options = cb.utils.extend({}, config.options);
    options.method = config.method || 'GET';
    if (typeof data === 'function') {
        options.callback = data;
        options.context = context || options.context || this;
    } else {
        options.params = data;
    }
    if (callback) {
        options.callback = callback;
        options.context = context || options.context || this;
    }
    if (async === false)
        options.async = false;
    return this.ajax(restUrl, options);
};
cb.rest.DynamicProxy.prototype.ajax = function (url, options) {
    return cb.rest.ajax(url, options);
};
cb.rest.MergeProxy = function () {
    var _request = { datas: [], events: [] };

    this.add = function (proxy, data, callback, context) {
        if ($.isArray(proxy)) {
            var len = proxy.length;
            if ($.isArray(data)) {
                if (data.length === len) {
                    for (var i = 0; i < len; i++) {
                        this.addInner(proxy[i], data[i], callback, context);
                    }
                }
            } else {
                for (var i = 0; i < len; i++) {
                    this.addInner(proxy[i], data, callback, context);
                };
            }
        } else {
            this.addInner(proxy, data, callback, context);
        }
    };

    this.addInner = function (proxy, data, callback, context) {
        var requestMethod = proxy.method.toLocaleUpperCase()
        var requestUrl = cb.rest._getUrl(proxy.url, proxy.options);
        var requestData;
        if (requestMethod === 'GET' || requestMethod === 'DELETE') {
            requestUrl = cb.rest._appendUrl(requestUrl, data);
            requestData = null;
        } else {
            requestData = data;
        }
        _request.datas.push({ requestUrl: requestUrl, requestMethod: requestMethod, requestData: requestData });
        _request.events.push({ callback: callback, context: context });
    };

    this.submit = function (callback) {
        if (!_request.datas.length) return;
        var proxy = cb.rest.DynamicProxy.create({ BatchSubmit: { url: 'client/batchSubmit', method: 'POST' } });
        proxy.BatchSubmit(_request.datas, function (err, result) {
            if (callback) {
                callback(err, result);
                return;
            }
            if (err) {
                alert('合并请求提交失败: ' + err);
                return;
            }
            var len = result && result.length;
            if (!len) return;
            for (var i = 0; i < len; i++) {
                var event = _request.events[i];
                if (!event) continue;
                cb.rest.AjaxRequestManager.processAjaxResult(result[i], event.callback, event.context);
            }
            if (cb.rest.AppContext.simulate) {
                setTimeout(function () {
                    $(document.body).append('<div class="readyForCrawler"></div>');
                }, 3000);
            }
        });
    };
};
cb.rest.MergeProxy.create = function () {
    return new cb.rest.MergeProxy();
};
cb.rest.ajax = function (url, options) {
    options.url = url;
    return cb.rest.AjaxRequestManager.doRequest(options);
};
cb.rest.AjaxRequestManager = {
    _xhrs: [],
    doRequest: function (options) {
        var xhr = this.getXMLHttpRequest();
        if (!xhr) return;
        var method = options.method || 'GET';
        var url = cb.rest._getUrl(options.url, options);
        var queryJson = null;
        if (method.equalsIgnoreCase('get') || method.equalsIgnoreCase('delete'))
            url = cb.rest._appendUrl(url, options.params);
        else if (method.equalsIgnoreCase('post') || method.equalsIgnoreCase('put'))
            queryJson = JSON.stringify(options.params);
        xhr.open(method, url, options.async === false ? false : true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
        xhr.send(queryJson);
        if (options.async === false) {
            return this.onreadystatechange(xhr, options);
        } else {
            xhr.onreadystatechange = function () {
                cb.rest.AjaxRequestManager.onreadystatechange(this, options);
            };
        }
        if (options.mask === true)
            cb.util.loadingControl.start();
    },
    onreadystatechange: function (xhr, options) {
        if (xhr.readyState !== 4) return;
        if (options.mask === true)
            cb.util.loadingControl.end();
        if (xhr.status === 200) {
            var ajaxResult = JSON.parse(xhr.responseText);
            cb.rest.AjaxRequestManager.processAjaxResult(ajaxResult, options.callback, options.context, options);
        }
        xhr.isBusy = false;
    },
    getXMLHttpRequest: function () {
        var xhr;
        for (var i = 0, len = this._xhrs.length; i < len; i++) {
            if (!this._xhrs[i].isBusy) {
                xhr = this._xhrs[i];
                break;
            }
        }
        if (!xhr) {
            xhr = this.createXMLHttpRequest();
            this._xhrs.push(xhr);
        }
        xhr.isBusy = true;
        return xhr;
    },
    createXMLHttpRequest: function () {
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : (window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : null);
        return xhr;
    },
    processAjaxResult: function (ajaxResult, callback, context, options) {
        if (!ajaxResult || !ajaxResult.code) return;
        if (ajaxResult.code == 200) {
            if (callback)
                callback.call(context, null, ajaxResult.data);
        } else {
            if (ajaxResult.code === 900 && options && options.token && options.autoLogin !== false) {
                cb.route.redirectLoginPage();
                return;
            }
            if (callback)
                callback.call(context, ajaxResult);
        }
    }
};
cb.rest.ContextBuilder = {
    construct: function () {
        cb.rest.AppContext = {
            serviceUrl: location.protocol + '//' + location.host
        };
    }
};
cb.rest.ContextBuilder.construct();

module.exports = cb;
