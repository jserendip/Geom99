
Required Items

    Introducing ArcGIS Online Developers Website
    Due Feb 15, 2021 3:00 PM

    For many years Esri has been creating rich tutorials, examples and documentation on a separate website called "ArcGIS Developers". In early 2021 Esri "productized" this to a PaaS model similar to Google Cloud Maps, where Esri now uses API keys (versus before when the only option was the user/credit based system that traditional ArcGIS Online uses). There are some allowances for "free" access, but many services do require an API key from Esri.  
    On January 27th 2021 Esri revamped the developers site, which has caught us just one week before we started ArcGIS Online. I am revamping items on the checklists as we go -- but if you see something not working in the course instructions, or have an idea to make it better, please let me know. 

    Review You can access the developer site for free at https://developers.arcgis.com/. Depending on how you login (using an Organizational user account that is username-licensed or using a developer account which is API key/per use licensed) the website seems to change itself. The developers website dashboard (https://developers.arcgis.com/dashboard/) is not just documenting web components, and has desktop APIs and other software Esri creates. The developers site definitely focuses on Web because that's what most organizations are focused on. You can set a "default" API when first visiting this (which can be changed at anytime). For this course you can select the ArcGIS API for Javascript OR the ArcGIS REST API, which is this courses focus. 

    Bonus You can create your own "Developers" account, which will also generate a 1-person AGOL Organization for you allowing you to use it independently of the Fleming Organizational Account. As well, you can "keep" this developers account after leaving the program where your ArcGIS Online items in the Fleming site will be removed this summer. Log out of the Fleming organization and visit the https://developers.arcgis.com website to sign up for your own account using your personal email. 
    
    ArcGIS Online Developers: Create a new empty layer
    Due Feb 15, 2021 3:00 PM

    There are many tools available in the Developers website to manage and create data, applications, and other components in ArcGIS Online that cannot be found anyplace else. 

    In particular there are a few great tools to create and import layers: https://developers.arcgis.com/layers/

    Create Use the Create Data / New Hosted Layer to generate an empty layer (often empty layers are called a schema) in ArcGIS Online's Data Store. Create a layer to store. Use the specifications from the Fall Geom65 tree collection database description (below) to provide a "framework" to create this new schema, or if you have your own idea get approval and you can create a layer to capture that. Once created, you can try adding data into this using a webmap with full editing controls to see how it works. Record the item ID URL for this hosted feature layer, and also find the REST URL and record that too (more on that in the next item). You can store these links in a webpage or MarkDown document on your GitHub for this weeks' activities. 

My Hosted Layer for Tree Survey ID URL: https://fleming.maps.arcgis.com/home/item.html?id=b8cf0fe569c7412fb342dd0c8e3b69f2
                                REST URL:  https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/tree_survey_layer/FeatureServer?token=b1v0069j_xbYQjnbfdJ_Y6LSNq6zhdIYtBMhiwPHVZwHMKUXxbsnYK-0jgngpwHzinZpBkMR0XLlW8UJle72pW6HkoA7UwvA6bi6DxCa805fU_OxpTM-Zr1tQDjhsgf2sXfUNrynjJYErTEradqcRI5rgO-cfOlLYijZa-IhcivLZEAABkaGUmFvn_vNxqrwuqUMCcd06sHQsWNylaOfomWnsB0Q9ASt9qOLvvnWC0FZZvpIKyNxfVGnuO3SZbaXHkCuYmMEQsOAb7NC_ytO489-mDjzmFriz0KUL7NKWJQ.
                                
              layer in a web map with data added URL: https://fleming.maps.arcgis.com/home/webmap/viewer.html?webmap=28448dffff69455783f11c3d61697492
              
              

    Bonus Compare this Developers experience to the template creation experience available in the main AGOL website: https://resource.esriuk.com/blog/2019-2-21-creating-arcgis-online-layers-from-scratch/
    Explore: Introduction to ArcGIS Online REST and Token Security
    Due Feb 15, 2021 3:00 PM

    Read The Fleming Collaborative Projects listings are in a Hosted Feature Layer on the Fleming Organizational ArcGIS Online system. You can find the item which houses that data here:

    https://fleming.maps.arcgis.com/home/item.html?id=f71d1d81895b40198833f1a1ccfa2148

    Take a look at the view count. Notice how low it is -- in reality you have accessed this data hundreds of times, but it doesn't appear in the item count. That is because ArcGIS Online's item isn't needed to access the data itself -- you can connect directly to the REST endpoint and obtain the data. The ArcGIS Online item is just a pointer to this data. Open the ArcGIS Online REST endpoint by clicking on the URL at the bottom-right of the item window. 

    URL screen capture

    Take a look at the URL that was opened. You have a token= portion in the URL. This token is generated and is valid for generally about 60 minutes. After this it is forgotten by the website and if you attempt to use it, the URL will fail. Note that NEVER provide someone else your token or a URL with it, as then they can log in as you if that token is still valid!!!

    The URL is https://services1.arcgis.com/pMeXRvgWClLJZr3s/arcgis/rest/services/Collab_Projects_2021/FeatureServer. Lets break this URL's components down so that you can understand it further. 

    https://services1.arcgis.com
    	This portion is the domain which "ArcGIS Server" is running to host the services. There are many of these--I've seen up to services7. Once data is created on one server it will always be there -- it doesn't move from server to server. ArcGIS Online decides where to put your data, you have no control. 
    /pMeXRvgWClLJZr3s/ 	This portion is text that is randomly generated for your organization. It basically is your "organizations" folder for storing all published services. 
    arcgis/rest/services/ 	This is the standard "ArcGIS" URL for getting to the rest services. We will learn about other URLs for ArcGIS Server next week. You can google this and find lots of publicly accessible services. 
    Collab_Projects_2021/ 	This is the service name which is taken from the original name of the ArcGIS Item. When generating this it must be unique for your organization. It cannot be changed after being created. You can rename the Item in ArcGIS Online, but the service will always stay as this. 
    FeatureServer/ 	This is the map service type. A FeatureServer can "send" vector data to your browser. An application on your browser takes that data and makes it appear on the map using various APIs. There are other server types that we will learn about later in this course. 
    0/ 	[optional] You will sometimes see a number at the end of the URL (try adding it if yours doesn't right now!). A FeatureSevice can have more than one Layer in it. The number at the end references the individual layer. The REST endpoint has different functionality depending on what "level" you are on, the Service level or the Layer level. 
    ?token= 	[optional] The access token for your login or the Developers API key. This is only required for secured services (those not shared publicly). If it is a public service no token is necessary. 

    Return your attention to the ArcGIS Online Item page at https://fleming.maps.arcgis.com/home/item.html?id=f71d1d81895b40198833f1a1ccfa2148

    With the item page loaded, notice in the Overview tab there is a Layers section towards the middle of the screen. Remember that a map service can contain more than one layer. If this service did, it would be listed here. This service contains only one item:

    Layers Screenshot

    Click the surveyPoint Point Layer and the AGOL Items page will focus on that layer in this map service: surveyPoint. On the left side of the screen there is a URL box. This contains the REST endpoint URL to this particular layer. Open that in a new tab by clicking the "View" button on the top-right side. Notice at the end of the URL it now contains the /0 referencing the specific layer? 

    URL screen capture

    This is the REST endpoint for this published layer on the map service hosted in ArcGIS Online. The ArcGIS Online Item only stores metadata and the location of the REST endpoint. Its the REST endpoint that allows access to the actual data--which can be one or more layers of data. The ArcGIS Online Item itself is only metadata and a reference pointing to this data source. 

    The URL will contain a "token=" parameter in the URL, which does expire after a short period of time. This key is important or you will not be able to access the item. Publicly shared items do not need tokens. Explore this REST interface a little. Next week, you will be getting an assignment to learn how this interface works in more detail. 

    Note: The API dashboard at https://developers.arcgis.com/dashboard can create a valid API key that can be used to access these items (for now--2021 they're changing this)! Try changing the token on the one generated from the Service URL to the one you create on your dashboard! 
    Complete 2 Tutorials for JavaScript API
    Due Feb 15, 2021 3:00 PM

    ArcGIS Online provides a Getting Started activity to help start with the JavaScript API. You can think of this as a "hello world" example. After you get an understanding of how the tutorial works and you have it running in your GitHub, move to the next one. Once completed both, choose one to duplicate and try and modify to improve it. 

    Read Follow the Getting Started guide https://developers.arcgis.com/javascript/latest/get-started/. Log in with either the college or your own Developer account. You will deploy the completed tutorials to your personal GitHub (not Codepen as it suggests). Use the JavaScript CDN and do not "install" the API (that's more for desktop stuff).

    Create Complete Tutorial 1: "Display a map" which is estimated to take 10 minutes. https://developers.arcgis.com/javascript/latest/display-a-map/ . Be sure to deploy this to your GitHub. It is ok to start with Codepen as it suggests, but you must have the examples functioning in your personal GitHub for submission. 

    Tip: You can copy the code directly out of each section on the Esri Webpage and paste it into your Visual Studio Code, the same as was done with Google Maps JavaScript API. Then when you "push" it to your GitHub it will be created there!

    Create Complete one of the remaining tutorials, either "Display your location" or "Add a point, line, and polyline" and get it running in your GitHub. Both of these tutorials each take 10 minutes. 

    Bonus Complete a third tutorial of your choice and host it in GitHub. Choose from any of the JavaScript tutorials available: https://developers.arcgis.com/javascript/latest/

    Create Once you have completed at least 2 of the tutorials, you can choose one of them OR any other tutorial on the developers site to enhance into something special for you. Make a copy of the original tutorial solution to preserve it! Modify the copy by (some ideas) changing out the data, location, basemap, and any other element you think would be unique. Be creative! Spend about 30-60 minutes enhancing this tutorial to make it your own original idea. (Bonus create something valentines themed, since February 14th is this weekend!) If you are not sure what to modify, review other tutorials to get ideas, or the JavaScript API reference itself: 

    https://developers.arcgis.com/javascript/latest/api-reference/

Optional Items

    Create your own ArcGIS Online Developers Account
    Due Feb 15, 2021 3:00 PM

    Bonus Your organizational account with Fleming is only available during your time at the college. You can create your own ArcGIS Online Developers Account for free, which does give you a 1 person ArcGIS Online subscription for free! Sign up on the developers website -- just be sure you aren't logged in already to get the ability to create a new account.

    Be sure to use an email address not provided by the college to sign up. You MAY complete the activities in this weeks' practical lab within your own developer account, but must share each item with a long-life TOKEN or make it public to be accessible during marking. 

    https://developers.arcgis.com/sign-up/
