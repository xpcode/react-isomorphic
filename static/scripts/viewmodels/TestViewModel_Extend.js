cb.viewmodels.register('TestViewModel', function (modelType) {
  var model = function () {
    cb.models.ContainerModel.call(this);
    this.init();
  };
  model.prototype = new cb.models.ContainerModel();
  model.prototype.modelType = modelType;

  model.prototype.init = function () {
    var fields = {
      ccc: new cb.models.SimpleModel(),
      ddd: new cb.models.SimpleModel(),
      eee: new cb.models.SimpleModel(),
      icon: new cb.models.SimpleModel(),
      switch: new cb.models.SimpleModel(),
      tooltip: new cb.models.SimpleModel(),
      tip: new cb.models.SimpleModel(),
      select: new cb.models.SimpleModel(),
      select2: new cb.models.SimpleModel(),
      select3: new cb.models.SimpleModel(),
      upload1: new cb.models.SimpleModel(),
      cascader: new cb.models.SimpleModel(),
      treeData: new cb.models.SimpleModel(),
      datepicker: new cb.models.SimpleModel(),
      rangepicker: new cb.models.SimpleModel(),
      radiostate: new cb.models.SimpleModel(),
      radiobuttongroup: new cb.models.SimpleModel(),
      radiogroup: new cb.models.SimpleModel(),
      progress: new cb.models.SimpleModel(),
      checkboxgroup: new cb.models.SimpleModel(),
      transfer: new cb.models.SimpleModel(),
      rate: new cb.models.SimpleModel(),
      timeline: new cb.models.SimpleModel(),
      steps: new cb.models.SimpleModel(),
      menu: new cb.models.SimpleModel(),
      table: new cb.models.GridModel({ columns: {} })
    };
    this.setData(fields);

    this.get('ccc').on("click", function (args) { TestViewModel_Extend.saveAction(this.getParent(), args); });
    this.get('select3').on("change", function (args) {
	    	TestViewModel_Extend.selectChangeAction(this.getParent(), args);
    });
    this.get('upload1').on("beforeUpload", function (args) {
	    	TestViewModel_Extend.beforeUpload(this.getParent(), args);
    });
    this.get('treeData').on('change', function (args) { TestViewModel_Extend.treeChange(this.getParent(), args); });
    this.initData();
    this.setDirty(false);
  };

  model.prototype.initData = function () {
    TestViewModel_Extend.doAction("init_Extend", this);
  };

  return model;
});
