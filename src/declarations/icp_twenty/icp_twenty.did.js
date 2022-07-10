export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createAchievement' : IDL.Func([IDL.Text], [IDL.Text], []),
    'queryAll' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
