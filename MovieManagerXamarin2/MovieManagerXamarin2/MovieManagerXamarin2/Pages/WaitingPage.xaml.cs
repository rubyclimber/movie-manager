﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MovieManagerXamarin2.Pages
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class WaitingPage : ContentPage
	{
		public WaitingPage ()
		{
		    NavigationPage.SetHasNavigationBar(this, false);

            InitializeComponent ();
		}
	}
}