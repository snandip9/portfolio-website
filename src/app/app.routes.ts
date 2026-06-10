import { Routes } from '@angular/router';
import {CV} from './cv/cv';
import {Coolstuff} from './coolstuff/coolstuff';
import {Projects} from './projects/projects';
import {Blog} from './blog/blog';
import {Home} from './home/home';
import {Aboutme} from './aboutme/aboutme'

export const routes: Routes = [

	{
		path: 'cv',
		component: CV
	},

	{
		path: 'coolstuff',
		component: Coolstuff
	},

	{
		path: 'projects',
		component: Projects
	},

	{
		path: 'blog',
		component: Blog
	},

	{
		path: '',
		component: Home
	},

	{
		path: 'aboutme',
		component: Aboutme
	},

];
