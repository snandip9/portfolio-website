import { Routes } from '@angular/router';
import {CV} from '/cv/cv';
import {Contact} from '/contact/contact';
import {Projects} from '/projects/projects';
import {Blog} from '/blog/blog';

export const routes: Routes = [

	{
		path: 'cv',
		component: CV
	},

	{
		path: 'contact',
		component: Contact
	},

	{
		path: 'projects',
		component: Projects
	},

	{
		path: 'blog',
		component: Blog
	}


];
