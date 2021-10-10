// https://www.iana.org/assignments/media-types/media-types.xhtml#text
// https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
import React from "react";

export function getByMimeType(mimeType) {
  let theType;
  switch (mimeType) {
    case 'application/msword':
      theType = 'doc';
      break;
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      theType = 'docx';
      break;
    case 'application/vnd.ms-excel':
      theType = 'xls';
      break;
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      theType = 'xlsx';
      break;
    case 'application/vnd.ms-powerpoint':
      theType = 'ppt';
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      theType = 'pptx';
      break;
    case 'application/pdf':
      theType = 'pdf';
      break;
    case 'application/zip':
      theType = 'zip';
      break;
    case 'application/x-rar-compressed':
      theType = 'rar';
      break;
    case 'application/x-tar':
      theType = 'tar';
      break;
    default:
      theType = 'unknow';
      break;
  }

  return theType
}

export function humanFileSize(bytes, si) {
  var thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  var units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  var u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + ' ' + units[u];
}

