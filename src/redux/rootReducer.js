import { CHANGE_TEXT, CHANGE_STYLES, APPLY_STYLE, CHANGE_TITLE, UPDATE_DATE, TABLE_RESIZE } from './types';

export function rootReducer(state, action) {
  let field;
  let val;
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState';
      return { ...state, [field]: value(state, field, action) };
    case CHANGE_TEXT:
      // TODO: 4. Опишите здесь как изменяется состояние при вызове действия типа CHANGE_TEXT.
      // При вызове CHANGE_TEXT мы хотим записать данные в объект dataState по ключу id'шнику ячейки
      // А также сохранить новое значение текста в currentText
      state.currentText = action.data.value;
      state.dataState[action.data.id] = state.currentText;
      // РЕШЕНИЕ: добавлены две строки выше этого комментария:
      // в первой строке сохраняется значение текущей ячейки (временное сохранение),
      // которое во второй строке записывается в состояние (постоянное сохранение до след. редактирования этой ячейки)
      return state;
    case CHANGE_STYLES:
      return { ...state, currentStyles: action.data };
    case APPLY_STYLE:
      field = 'stylesState';
      val = state[field] || {};
      action.data.ids.forEach((id) => {
        val[id] = { ...val[id], ...action.data.value };
      });
      return {
        ...state,
        [field]: val,
        currentStyles: { ...state.currentStyles, ...action.data.value },
      };
    case CHANGE_TITLE:
      return { ...state, title: action.data };
    case UPDATE_DATE:
      return { ...state, openedDate: new Date().toJSON() };
    default:
      return state;
  }
}

function value(state, field, action) {
  const val = state[field] || {};
  val[action.data.id] = action.data.value;
  return val;
}
