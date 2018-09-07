$BSD.button({
  position: { top: '20px', right: '200px' },
  icon: 'ambulance',
  onClick: () => console.log('clicked 1'),
});

$BSD.button({
  position: { top: '60px', right: '200px' },
  text: 'HELLOOOOOOOO!!',
  icon: 'compress',
  onClick: () => console.log('clicked 2'),
});
$BSD.button({
  position: { top: '100px', right: '200px' },
  text: 'just text',
  onClick: () => console.log('clicked 2'),
});


$BSD.button({
  position: { bottom: '60px', right: '200px' },
  style: 'danger',
  icon: 'times',
});
$BSD.button({
  position: { bottom: '60px', right: '150px' },
  style: 'primary',
  icon: 'check',
});
$BSD.button({
  position: { bottom: '60px', right: '100px' },
  style: 'success',
  icon: 'refresh',
});