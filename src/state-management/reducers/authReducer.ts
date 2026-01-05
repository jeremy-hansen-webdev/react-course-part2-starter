interface Login {
  type: 'LOGIN';
  username: string;
}

interface Logout {
  type: 'LOGOUT';
}

export type LoginOut = Login | Logout;

export const autReducer = (state: string, action: LoginOut): string => {
  switch (action.type) {
    case 'LOGIN': {
      return action.username;
    }
    case 'LOGOUT': {
      return '';
    }
    default: {
      return state;
    }
  }
};
