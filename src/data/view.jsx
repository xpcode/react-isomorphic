module.exports = {
  layoutMode: "Fluid",
  screenSize: "L",
  viewModel: "demoViewModel",
  containers: [
    {
      name: 'Toolbar',
      type: 'Toolbar',
      iCols: 0,
      controls: [
        {
          name: 'returnAction',
          title: '返回',
          entity: 'Toolbar',
          field: 'returnAction',
          ctrlType: 'Button',
        },
        {
          name: 'addAction',
          title: '增加',
          entity: 'Toolbar',
          field: 'addAction',
          ctrlType: 'Button',
        }
      ]
    },
    {
      name: 'baseinfo',
      title: '基本信息',
      type: 'TabPage',
      iCols: 0,
      containers: [
        {
          iCols: "3",
          name: "BaseInfo",
          title: "基本信息",
          type: "Group",
          controls: [
            {
              entity: "inventory",
              field: "code",
              ctrlType: "TextBox",
              name: "code",
              title: "料品编码"
            },
            {
              entity: "inventory",
              field: "pk_org",
              ctrlType: "Refer",
              defaultValue: "GLOBLE00000000000000",
              name: "pk_org",
              refCode: "code",
              refId: "up600015",
              refKey: "pk_org",
              refName: "name",
              refShowMode: "CodeName",
              title: "组织"
            }
          ]
        }
      ]
    }
  ]
}
