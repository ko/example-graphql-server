const resolvers = {
  getWidgets: params => {
    const widgets = [];
    widgets.push({ name: "widget 1", });
    widgets.push({ name: "widget 2", });
    widgets.push({ name: "widget 3", });
    return widgets;
  },
  getWidget: params => {
    return { name: params.name };
  },
};

export default resolvers;
