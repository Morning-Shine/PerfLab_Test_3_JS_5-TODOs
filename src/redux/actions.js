import { CHANGE_TEXT, CHANGE_STYLES, APPLY_STYLE, CHANGE_TITLE, UPDATE_DATE, TABLE_RESIZE } from './types';
// Action Creator

// TODO: 2. Добавьте action creator (action creator - это ф-ция, создающая действие) 
// tableResize для изменения стилей.
// Для этого нужно добавить новый тип действия TABLE_RESIZE в types.js
// Нужно диспатчить action creator для TABLE_RESIZE, когда вызывается ф-ция ресайза колонки
// или строки (найдите эту ф-цию).
// tableResize принимает объект типа {value: 63, type: 'row', id: '6'}
// В reducer уже есть закомментированные наброски обработки этого действия, 
// проверьте корректность сохранения размера при ресайзе, если обновить страницу.

// РЕШЕНИЕ: добавлена строка  6 в в types.js (добавление нового типа действия),
// в этот файл, а также в rootReducer это действие добавлено в импорт;
// в файле Table.js добавлена строка 65: отправка действия (диспатч) для TABLE_RESIZE
// размер ячеек сохраняется при обновлении страницы или повторном входе в таблицу

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data,
  };
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data,
  };
}

export function updateDate() {
  return {
    type: UPDATE_DATE,
  };
}

export function changeStyles(data) {
  return {
    type: CHANGE_STYLES,
    data,
  };
}

// value, ids
export function applyStyle(data) {
  return {
    type: APPLY_STYLE,
    data,
  };
}

export function changeTitle(data) {
  return {
    type: CHANGE_TITLE,
    data,
  };
}
