import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/BurhanBudak/my-sveltekit-pokedex.git', // Update to point to your repository
  user: {
   name: 'BurhanBudak', // update to use your name
   email: 'budak.burhan@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);