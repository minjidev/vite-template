import { setupServer } from 'msw/node';
import { commonHandlers } from './handlers';

export const server = setupServer(...commonHandlers);
