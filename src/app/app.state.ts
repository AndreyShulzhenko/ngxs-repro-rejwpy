import { State, Action } from '@ngxs/store';

export class Add {
  static readonly type = 'Add';
};

export class Delete {
  static readonly type = 'Delete';
};

@State<number>({
  name: 'count',
  defaults: 0
})
export class CountState {
  @Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState(state + 1);
  }

  @Action(Delete)
  delete({ getState, setState }) {
    const state = getState();
    setState(state - 1);
  }
}
