const initState = {
  projects: [
    {
      id: "1",
      title: "title 1",
      content: "blasadfasdf asdfasdf adfa sdfasdfsd b nd fdnf a"
    },
    {
      id: "2",
      title: "title 2",
      content:
        "sadfjasndfjahsd cajd dasjf dhjf ajsdhc ajdhsc jahdscndakshcnakjsdcna"
    },
    {
      id: "3",
      title: "title 3",
      content:
        "ksjdfnksajc adskjc adskjc nadskjcndksj cnkajsd cnakjsdcnasdkjc nasdkjcnsadkjcnasdkjcnk nk"
    }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_2":
      console.log(action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
