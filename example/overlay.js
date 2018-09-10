$BSD.overlay.button({
  position: { top: '20px', right: '60px' },
  icon: 'ambulance',
  onClick: () => console.log('clicked 1'),
});

$BSD.overlay.button({
  position: { top: '60px', right: '60px' },
  text: 'icon with text',
  icon: 'compress',
  onClick: () => console.log('clicked 2'),
});
$BSD.overlay.button({
  position: { top: '100px', right: '60px' },
  text: 'just text',
  onClick: () => console.log('clicked 3'),
});

$BSD.overlay.button({
  position: { top: '20px', left: '30px' },
  text: 'Generate field',
  onClick: () => field.init(),
});

const c1 = $BSD.overlay.container({ layout: 'row', position: { bottom: '60px', left: '60px' } });
const clicker = c1.button({
  text: 'click me',
  onClick: () => clicker.text = 'thank you!'
});

let msg = 'tick';
const clock = c1.button({ text: msg });
setInterval(() => {
  msg = msg === 'tick' ? 'tock' : 'tick';
  clock.text = msg;
}, 1000);

let counter = 100;
const countDown = c1.button();
setInterval(() => {
  if (counter >= 0) {
    countDown.text = `${counter}`;
    counter--;
  } else {
    countDown.delete();
  }
}, 100);

const c2 = $BSD.overlay.container({ layout: 'row', position: { bottom: '60px', right: '60px' } });
c2.button({ icon: 'compress' });
c2.button({ text: 'text button' });
c2.button({ icon: 'minus' });
c2.button({ icon: 'plus' });
c2.button({ icon: 'chevron-left' });
c2.button({ icon: 'chevron-right' });
c2.button({ icon: 'chevron-up' });
c2.button({ icon: 'chevron-down' });

const c3 = $BSD.overlay.container({ layout: 'column', position: { left: '60px', top: '120px' } });
c3.button({ id: 'xyz', style: 'danger', icon: 'times' });
c3.button({ style: 'primary', icon: 'check' });
c3.button({ style: 'success', icon: 'sync', size: 'large' });
