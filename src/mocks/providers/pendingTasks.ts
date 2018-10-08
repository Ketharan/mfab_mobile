import { Injectable } from '@angular/core';

import { pendingTask } from '../../models/pendingTask';


@Injectable()
export class pendingTasks {
  PendingTasks: pendingTask[] = [];

  defaultItem: any = {
    "symbol": "assets/img/speakers/bear.jpg",
    "department": "Marketing",
  };


  constructor() {
    let PendingTasks = [
      {
        "symbol": "assets/img/speakers/bear.jpg",
        "department": "Marketing",
      },
      {
        "symbol": "assets/img/speakers/bear.jpg",
        "department": "Marketing",
      },
      {
        "symbol": "assets/img/speakers/bear.jpg",
        "department": "Marketing",
      },
      {
        "symbol": "assets/img/speakers/bear.jpg",
        "department": "Marketing",
      },
      {
        "symbol": "assets/img/speakers/bear.jpg",
        "department": "Marketing",
      },
      {
        "symbol": "assets/img/speakers/bear.jpg",
        "department": "Marketing",
      },
      {
        "symbol": "assets/img/speakers/bear.jpg",
        "department": "Marketing",
      }
    ];

    for (let pending of PendingTasks) {
      this.PendingTasks.push(new pendingTask(pending));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.PendingTasks;
    }

    return this.PendingTasks.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(pending: pendingTask) {
    this.PendingTasks.push(pending);
  }

  delete(pending: pendingTask) {
    this.PendingTasks.splice(this.PendingTasks.indexOf(pending), 1);
  }
}
