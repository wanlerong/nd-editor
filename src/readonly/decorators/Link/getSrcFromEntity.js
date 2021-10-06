export function getSrcFromEntity (entityData) {
  // 外部粘贴过来的链接，通过convertFromHTMLtoContentBlocks转化过来的entity中的key叫href，这里兼容一下。
  return entityData.src ? entityData.src : entityData.href;
}

