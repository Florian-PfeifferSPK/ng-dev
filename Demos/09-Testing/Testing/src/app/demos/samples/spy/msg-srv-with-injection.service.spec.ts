import { MessageServiceWithInjection } from './msg-srv-with-injection.service';

describe('Testing a simple Service: SimpleMessageService', () => {
  let service: MessageServiceWithInjection;
  // let spy objects be of type: any
  let util: any;

  beforeEach(() => {
    util = jasmine.createSpyObj('Util', ['log', 'greet']);
    service = new MessageServiceWithInjection(util);
  });

  it('should have no messages to start', () => {
    expect(service.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {
    service.add({ message: 'Hallo Jürgen' });
    service.add({ message: 'Hi Mike', processed: true });
    expect(service.messages.length).toBe(2);
    expect(service.messages[1].message == 'Hi Mike');
    // Spy allows to get metadata about methods
    expect(util.log).toHaveBeenCalledTimes(2);
  });

  it('should remove all messages when clear is called', () => {
    service.add({ message: 'Szia Krisztina' });
    service.clear();
    expect(service.messages.length).toBe(0);
  });

  it('should delete the correct item', () => {
    // service = new BetterMessageService();
    service.messages = [
      { message: 'Szia Krisztina' },
      { message: 'Hola Alessandra' },
    ];
    service.delete('Szia Krisztina');

    expect(service.messages.length).toBe(1);
    expect(service.messages).toContain({ message: 'Hola Alessandra' });
  });
});
