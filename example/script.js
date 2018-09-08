$BSD.button({
  position: { top: '20px', right: '100px' },
  icon: 'ambulance',
  onClick: () => console.log('clicked 1'),
});

$BSD.button({
  position: { top: '60px', right: '100px' },
  text: 'HELLOOOOOOOO!!',
  icon: 'compress',
  onClick: () => console.log('clicked 2'),
});
$BSD.button({
  position: { top: '100px', right: '100px' },
  text: 'just text',
  onClick: () => console.log('clicked 3'),
});

let msg = 'tick';
const clock = $BSD.button({
  position: { top: '20px', left: '30px' },
  text: msg,
});
setInterval(() => {
  msg = msg === 'tick' ? 'tock' : 'tick';
  clock.text = msg;
}, 1000);

const r = $BSD.panel({layout: 'row', position: { bottom: '60px', right: '60px' }});
r.button( {icon: 'compress'} );
r.button( {text: 'text button'} );
r.button( {icon: 'minus'} );
r.button( {icon: 'plus'} );
r.button( {icon: 'chevron-left'} );
r.button( {icon: 'chevron-right'} );
r.button( {icon: 'chevron-up'} );
r.button( {icon: 'chevron-down'} );

const c = $BSD.panel({layout: 'column', position: { left: '60px', top: '120px' }});
c.button( {id: 'xyz', style: 'danger', icon: 'times'} );
c.button( {style: 'primary', icon: 'check'} );
c.button( {style: 'success', icon: 'sync', size: 'large'} );

let counter = 2;
const countDown = c.button();
setInterval(() => {
  if (counter >= 0) {
    countDown.text = `${counter}`;
    counter--;
  } else {
    countDown.delete();
  }
}, 1000);