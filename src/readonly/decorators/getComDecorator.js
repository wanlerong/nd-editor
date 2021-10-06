import {CompositeDecorator} from 'draft-js';
import getCodeDecorator from '../decorators/Code';
import getLinkDecorator from '../decorators/Link';
import getTexDecorator from '../decorators/Tex';

export default function getCompositeDecorator(config = {}) {
  let decorators = [
    getCodeDecorator(config),
    getLinkDecorator(config),
    getTexDecorator(config)
  ];
  return new CompositeDecorator(decorators)
}
