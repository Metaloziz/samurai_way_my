import { create } from 'react-test-renderer';
import { ProfileStatus } from './ProfileStatus';
import { updateUserStatusThunkCreator } from 'redux/profile_reducer';

let testText: string;

beforeEach(() => {
  testText = 'merry';
});

describe('ProfileStatus component', () => {

  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status={testText}
                                            updateUserStatus={updateUserStatusThunkCreator} />);
    const element = component.root;
    expect(element.props.status).toBe(testText);
  });

  test('after creation div should be displayed', () => {
    const component = create(<ProfileStatus status={testText}
                                            updateUserStatus={updateUserStatusThunkCreator} />);
    const element = component.root;
    let div = element.findByType('div');
    expect(div).not.toBeNull();
  });

  test('after creation input shouldn\'t be displayed', () => {
    const component = create(<ProfileStatus status={testText}
                                            updateUserStatus={updateUserStatusThunkCreator} />);
    const element = component.root;

    expect(() => {
      element.findByType('input');
    }).toThrow();
  });

  test('after creation h2 should be contains correct text', () => {
    const component = create(<ProfileStatus status={testText}
                                            updateUserStatus={updateUserStatusThunkCreator} />);
    const element = component.root;
    let h2 = element.findByType('h2');
    expect(h2.children[0]).toBe(testText);
  });

});