import generalCmds from './general';
import findCmds from './find';
import recordScreenCmds from './record-screen';
import touchCmds from './touch';

const commands = {};
Object.assign(
  commands,
  generalCmds,
  findCmds,
  recordScreenCmds,
  touchCmds,
  // add other command types here
);

export { commands };
export default commands;
