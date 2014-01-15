package com.WorklightMobile;

import android.os.Bundle;

import com.worklight.androidgap.WLDroidGap;

public class WorklightMobile extends WLDroidGap {
	
	@Override
	public void onCreate(Bundle savedInstanceState){
		super.onCreate(savedInstanceState);
		super.setIntegerProperty("splashscreen", R.drawable.splash);
	}
	
	/**
     * onWLInitCompleted is called when the Worklight runtime framework initialization is complete
     */
	@Override
	public void onWLInitCompleted(Bundle savedInstanceState){
		super.loadUrl(getWebMainFilePath(), 3000);
		// Add custom initialization code after this line
	}
	
}



