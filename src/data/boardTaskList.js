import BoardTaskList from "../components/BoardTaskList";

const boardTaskList = {
  category: {
    key: "tech",
    value: "Technology"
  },
  icon: {
    key: "1",
    value: "/images/board-logo/1.svg"
  },
  tasks: [
    {
      subtasks: ["60327de4fd8328001d036103"],
      comments: [],
      _id: "60327dcdfd8328001d036100",
      title: "Test task 1",
      description: "It's task 1",
      key: "TB1-1",
      board: "60327963fd8328001d0360fc",
      owner: "60327959fd8328001d0360fb",
      status: "BACKLOG",
      estimation: 0,
      assignee: null,
      __v: 0
    },
    {
      subtasks: [],
      comments: [],
      _id: "60327dd3fd8328001d036101",
      title: "Test task 2",
      description: "",
      key: "TB1-2",
      board: "60327963fd8328001d0360fc",
      owner: "60327959fd8328001d0360fb",
      status: "BACKLOG",
      estimation: 0,
      assignee: null,
      __v: 0
    },
    {
      subtasks: [],
      comments: [],
      _id: "60327dddfd8328001d036102",
      title: "Test task 3",
      description: "Just do it",
      key: "TB1-3",
      board: "60327963fd8328001d0360fc",
      owner: "60327959fd8328001d0360fb",
      status: "BACKLOG",
      estimation: 0,
      assignee: null,
      __v: 0
    },
    {
      subtasks: [
        "60327df4fd8328001d036104",
        "60327e0cfd8328001d036106",
        "60327e12fd8328001d036107"
      ],
      comments: [],
      _id: "60327de4fd8328001d036103",
      title: "Test subtask 1",
      description: "",
      key: "TB1-4",
      board: "60327963fd8328001d0360fc",
      owner: "60327959fd8328001d0360fb",
      status: "BACKLOG",
      estimation: 0,
      assignee: null,
      parent: "60327dcdfd8328001d036100",
      __v: 0
    },
    {
      subtasks: ["60327dfefd8328001d036105"],
      comments: [],
      _id: "60327df4fd8328001d036104",
      title: "Test subtask 2",
      description: "It is subtask for subtask!",
      key: "TB1-5",
      board: "60327963fd8328001d0360fc",
      owner: "60327959fd8328001d0360fb",
      status: "BACKLOG",
      estimation: 0,
      assignee: null,
      parent: "60327de4fd8328001d036103",
      __v: 0
    },
    {
      subtasks: [],
      comments: [],
      _id: "60327dfefd8328001d036105",
      title: "Test subtask 3",
      description: "deeeeeper",
      key: "TB1-6",
      board: "60327963fd8328001d0360fc",
      owner: "60327959fd8328001d0360fb",
      status: "BACKLOG",
      estimation: 0,
      assignee: null,
      parent: "60327df4fd8328001d036104",
      __v: 0
    },
    {
      subtasks: [],
      comments: [],
      _id: "60327e0cfd8328001d036106",
      title: "Test subtask 4",
      description: "",
      key: "TB1-7",
      board: "60327963fd8328001d0360fc",
      owner: "60327959fd8328001d0360fb",
      status: "BACKLOG",
      estimation: 0,
      assignee: null,
      parent: "60327de4fd8328001d036103",
      __v: 0
    },
    {
      subtasks: [],
      comments: [],
      _id: "60327e12fd8328001d036107",
      title: "Test subtask 5",
      description: "",
      key: "TB1-8",
      board: "60327963fd8328001d0360fc",
      owner: "60327959fd8328001d0360fb",
      status: "BACKLOG",
      estimation: 0,
      assignee: null,
      parent: "60327de4fd8328001d036103",
      __v: 0
    }
  ],
  _id: "60327963fd8328001d0360fc",
  title: "Test board 1",
  key: "TB1",
  owner: {
    _id: "60327959fd8328001d0360fb",
    name: "obabichev",
    email: "babichev.oleg.n@gmail.com",
    oauth: "google",
    __v: 0
  },
  __v: 0
};

export default boardTaskList;
