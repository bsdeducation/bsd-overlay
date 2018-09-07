$BSD.button({
  position: { top: '20px', right: '200px' },
  icon: 'ambulance',
  onClick: () => console.log('clicked 1'),
});

$BSD.button({
  position: { right: '200px', top: '60px' },
  text: 'HELLOOOOOOOO!!',
  icon: 'compress',
  onClick: () => console.log('clicked 2'),
});
$BSD.button({
  position: { top: '100px', right: '200px' },
  text: 'just text',
  onClick: () => console.log('clicked 2'),
});

// let text = 'tick';
// const clock = $BSD.button({
//   position: { top: '20px', left: '30px' },
//   text,
// });
// setInterval(() => {
//   text = text === 'tick' ? 'tock' : 'tick';
//   clock.text = text;
// }, 1000);

// $BSD.button({
//   position: { bottom: '60px', right: '200px' },
//   style: 'danger',
//   icon: 'times',
// });
// $BSD.button({
//   position: { bottom: '60px', right: '150px' },
//   style: 'primary',
//   icon: 'check',
// });
// $BSD.button({
//   position: { bottom: '60px', right: '70px' },
//   style: 'success',
//   icon: 'refresh',
//   size: 'large'
// });

const p = $BSD.panel({layout: 'row', position: { bottom: '60px', right: '60px' }});
p.button( {style: 'danger', icon: 'times'} );
p.button( {style: 'primary', icon: 'check'} );
p.button( {style: 'success', icon: 'refresh', size: 'large'} );

