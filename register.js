Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
      module: 'motw-es',
      lang: 'es',
      dir: 'compendium/es',
		});
	}
});


