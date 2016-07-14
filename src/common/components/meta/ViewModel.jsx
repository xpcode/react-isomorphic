import React, { Component, PropTypes } from 'react'
import { isArray, isString } from 'lodash'

import env from '../../../env'

const baseUrl = process.env.NODE_ENV !== 'production' ?
  env.SCRIPT_BASEURL_DEV :
  env.SCRIPT_BASEURL_PROD

export default class ViewModel extends Component {
  static propTypes = {
    entities: PropTypes.array,
  }

  static defaultProps = {
    entities: [],
  }

  // 生成 viewmodel.js
  generateScript(entities) {
    let script = null

    if (process.env.NODE_ENV === 'production') {
      // 生成 js 文件到 /static/viewmodel/**.js、压缩，返回文件绝对路径
      // 确保只是首次生成
    }
    // script = 'console.log("ouput viewmodel.js");'
    script = `${baseUrl}/static/scripts/viewmodels/TestViewModel.js`
    return script
  }

  // 生成 viewmodel_extend.js
  generateExtendScript(entities) {
    return `${baseUrl}/static/scripts/viewmodels/TestViewModel_Extend.js`
  }

  render() {
    const {
      entities
    } = this.props

    const scriptContent = this.generateScript(entities)
    const renderScript = process.env.NODE_ENV !== 'production' ?
      <script src={scriptContent}></script> :
      <script dangerouslySetInnerHTML={{ __html: scriptContent }}></script>

    const extendScriptContent = <script src={this.generateExtendScript(entities) }></script>

    return (
      <div>
        <script src={`${baseUrl}/static/scripts/cube/0.1.0/cube.js`}></script>
        {renderScript}
        {extendScriptContent}
      </div>
    )
  }
}

const template = `
cb.viewmodels.register('<%=vmName%>', function (modelType) {
	var model = function () {
		cb.models.ContainerModel.call(this);
		this.init();
	};
	model.prototype = new cb.models.ContainerModel();
	model.prototype.modelType = modelType;

	model.prototype.init = function () {
	    var fields = {

	    	<%for(var i=0;i<fields.length;i++){%>
				<%var field = fields[i];%>
				'<%=field.name%>':<%=field.value%>,
			<%}%>
	    };
	    this.setData(fields);

	    this.initData();
	    this.setDirty(false);
	};

	model.prototype.initData = function () {
    	//TestViewModel_Extend.doAction("init_Extend", this);
	};

	return model;
});
`
