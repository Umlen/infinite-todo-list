import { TodoType } from '../types/types';

type SubTaskAddingProps = (
  id: string,
  array: TodoType[],
  task: TodoType,
) => TodoType[];

type RecursionProps = (
  id: string,
  array: TodoType[],
) => TodoType[];

type SearchProps = (
  id: string,
  array: TodoType[],
) => TodoType | null;

type CompleteTogglerProps = (
  array: TodoType[],
  state: boolean,
) => TodoType[];

export const subTaskAdding:SubTaskAddingProps = (id, array, task) => {
  return array.reduce((arr: TodoType[], item) => {
    if (item.id === id) {
        item.subTasks.push(task);
        arr.push(item);
    } else {
        arr.push({...item, subTasks: subTaskAdding(id, item.subTasks, task)});
    }

    return arr;
  }, []);
};

export const recursionFilter:RecursionProps = (id, array) => {
  return array.reduce((arr: TodoType[], item) => {
    if (item.id !== id) {
      arr.push({...item, subTasks: recursionFilter(id, item.subTasks)});
    } 

    return arr;
  }, []);
};

export const recursionSearch:SearchProps = (id, array) => {
  for (let item of array) {
    if (item.id === id) {
      return item;
    }

    const subItem = recursionSearch(id, item.subTasks);
    
    if (subItem) {
      return subItem;
    }
  }

  return null;
};

export const recursionCompleteToggler:RecursionProps = (id, array) => {
  return array.reduce((arr: TodoType[], item) => {
    if (item.id !== id) {
        arr.push({...item, subTasks: recursionCompleteToggler(id, item.subTasks)});
    } else {
        arr.push({
          ...item, 
          isCompleted: !item.isCompleted, 
          subTasks: subTasksCompleteToggler(item.subTasks, !item.isCompleted)
        });
    }

    return arr;
  }, []);
};

export const subTasksCompleteToggler:CompleteTogglerProps = (array, state) => {
  return array.reduce((arr: TodoType[], item) => {
    arr.push({
      ...item, 
      isCompleted: state, 
      subTasks: subTasksCompleteToggler(item.subTasks, state)
    });

    return arr;
  }, []);
};
