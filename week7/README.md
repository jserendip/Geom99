
# Required Items

##     Publish the Canada Service to the Luna server (During your lab)
##    Due Feb 26, 2021 12:00 PM

    Create
     Publishing data using ArcGIS Pro to ArcGIS Server is many steps. Using ArcGIS Pro, this exercise will provide you guidance to understand how to register data, upload, and start a map service on the Fleming's ArcGIS Server.  A video guides you through the general process to complete these tasks here, but be sure to use the settings detailed below when carrying out this task: https://www.youtube.com/watch?v=nIRlZN9ECwY 

    TL;DR: Server name is luna.flemingcollege.ca/arcgis Username is ADROOT\flemingusername. Password is same as your email. Name your published service FlemingusernameCanada
    Detailed Instructions (including a data download link):
        Be sure to follow the naming conventions and instructions exactly. This will be part of your next practical lab evaluation. If you make a mistake in your publishing, correct it to be accurate for best grade. And please, ask if you need help using the Teams Channel or during your lab!
        The ArcGIS Server you will be publishing to is https://luna.flemingcollege.ca/arcgis and is (for 2021) available to be administered from home. Access to TCP Port 6443 is unavailable outside of the college so you must pass through the web adapter to use it from your home internet connection. 
    It is a best practice to restrict Port 6443 to "internal only", not via the public web. For 2021 ArcGIS Server administration was made available on the public web to facilitate students inability to work from the campus, which contravenes this best practice. Be prepared to detail the best practice of using 6443 to publish and administer map services and focus TCP 443 for items using the services. 
        Luna uses the college Active Directory for authentication. Your username for this server is the domain (adroot) followed by your Fleming username. For example, if your username is "msmith" type ADROOT\msmith for the username. The ADROOT\ part, including the blackslash \ is important or it won't let you log in. The text is not case sensitive. 
        Service names must be unique. Name your service your Fleming Username followed by Canada. For example, for me it would be ShawnmCanada. Do not include spaces or any other text or characters. 
        The Canada dataset used in this activity can be downloaded here: Canada.zip. Open this shapefile dataset into an ArcGIS Pro Project into a map as demonstrated. Publish only this data (no basemap, no other data) and be sure to register the data so it is NOT UPLOADED to LUNA. This registration process is important!
        Before publishing, you must register the folder for the data to be recognized from the server. We have already placed the data on Luna for you, so you do not need to do that step. Just point your data at the data on the server. 
        Use the 3-dots (ellipsis) at the end of the warning in the Publish Map Service messages dialog to register the service automatically for you. Click the Ellipsis and then select Register Data Source. 

    ArcGIS Pro GUI
        To register a service you must specify three things. First is the Name for the connection which will be unique for your computer and settings. For this course please use your map service name (Fleming username followed by Canada without spaces, so I would be shawnmCanada). This is to avoid naming conflicts between students. Next set the published folder path where the data are located on your local computer (which will automatically be populated from the map you selected). Finally set the server folder path, which for LUNA in this activity is C:\GISWorkspace\Canada. 

    GUI Dialog example
        Hit Create and the server will register the folder and test it to make sure it works. 
        Publish your service and then open its URL to check the REST endpoint returns data properly as demonstrated in your lab and lecture.
    Adding ArcGIS Server (Luna) Map Services to ArcGIS Online
    Due Mar 1, 2021 11:00 AM

    Using your published map service, add the Canada Layer to ArcGIS Online. 

    Example: https://luna.flemingcollege.ca/arcgis/rest/services/Geom99/ShawnmCanadaPro/MapServer/0 <-- NOTE that I include the layer number!

    By referencing the Layer specifically, we can add just that one layer and not the entire map service. With ArcGIS Server map services, a "bundle" of layers and their cartography can be published at once, similar to how an MXD. Typically this "bundle" is a theme of data used in an application as operational layers, or perhaps as a source to create a tiled/cashed base map. As an added bonus of flexibility, a single layer can be targeted, which does sometimes allow for unique functionality. 

##    Create 
    To add the service to a map in ArcGIS Online, you must first make an ArcGIS Online Item to reference the service. Because this service is also secured (requires a log in), you must provide credentials to add it. Use your own login information and save it with the service so that everyone in ArcGIS Online can see it. 

    https://doc.arcgis.com/en/arcgis-online/reference/arcgis-server-services.htm

    Once the item referencing your map service layer URL, open the NEW MAP VIEWER in ArcGIS Online and you can add that item to the map. Because we referenced the ArcGIS Map Service Layer specifically that is all we get added here and the tags, description and other metadata need to be specified for it.  If referencing the map service itself (remove the 0 from the map service URL) we would get the metadata automatically populating from the service itself. 

##    Review 
    Did your map projection change? What is the initial map extent? What properties from your originally published map carry forward? Explore the service from this context in ArcGIS Online and what can be done in the new ArcGIS Online beta map viewer to enhance your map. Change (override) its cartography to display the best way possible for a map showing Canada and its provinces. If you need to re-publish the service in ArcMap/ArcGIS Pro to make the improvements do that.

    Submit This map service, its item and ArcGIS Online WebMap (using the Beta) will be submitted as part of your next practical lab. This practical lab activity is the focus for the required pass to earn the credit in this course.
    Using ArcGIS Server Map Services
    Due Mar 1, 2021 11:00 AM

### My ArcGIS Online map service from Published CanadaV2 map on Luna ArcGIS Server:   https://fleming.maps.arcgis.com/home/webmap/viewer.html?webmap=104b01a38dc1446ea0949966978fe50d  

    Now that your map is created and hosted on ArcGIS Online, explore the REST endpoints for both from Luna and the item in ArcGIS Online. They're identical and using the same data, stored on the Luna server. The entire class has done this and you are all using the same single SHP file on the server (assuming you did the first activity correctly!). But you can actually override the map cartography (somewhat).

##    Create 
    Add the REST endpoint URL for the map service into ArcGIS Pro directly. You can also try browsing the "items" in ArcGIS Online and add the item that way. One references directly to Luna, the other goes to ArcGIS Online and accesses it through there. See what cartographic options are available in ArcGIS pro for each and save a newly-styled map in the Project for review in the next practical lab. 
    Create an application using your Luna Canada Map Service
    Due Mar 1, 2021 11:00 AM

 ##   Create 
    Find a new example (one you have not completed in week 3) from the JavaScript API (https://developers.arcgis.com/labs/?product=javascript&topic=any ), Esri's GitHub (http://esri.github.io/ ), Android, Python (or another source, with approval, not listed) that would allow you to create a user-friendly "wrapper" for your new Canada Map service to educate elementary children (7-10 years of age) on the Provinces of Canada. Create and host that modified JavaScript example on your GitHub site so that anyone logged into the Fleming ArcGIS Online Organization can open your application.

    You can download and configure ArcGIS Online templates for this item too! See how to configure them here: https://youtu.be/sJf-XxjxPPE (older video, but still applies)

    This item will be checked as part of your next Practical Lab. Be creative and create a "polished" application showing the provinces of Canada. 
    Read: Feature Service (FeatureServer) vs Map Service (MapServer)
    Due Mar 1, 2021 11:00 AM

## My educational application of Canada web map   https://jserendip.github.io/Geom99/week7/JSerendip_Wk7_Canada_w_wrapper.html
    

    Read 
    There are many types of services that can be created using ArcGIS Server. But two are the most important to understand, and can be challenging to differentiate at first. Here is a brief summary to understand the major differences. Both types make available attribute data, but the major difference is with the mapping data and how the client displays it. 
    Feature Service (vector geometries are streamed):

        Feature services allow you to serve features over the Internet and provide the symbology to use when displaying the features. Clients can execute queries to get features and perform edits that can be applied to the server. Feature services provide templates that can be used for an enhanced editing experience on the client. Data from relationship classes and nonspatial tables can also be queried and edited using feature services. The client usually "converts" the geometries into a "map", since this type of service streams vectors. 

        Vectors from feature services can be streamed in a few ways, most often in JSON. However, any format that sends the vectors is possible, including the OGC format PBF which is highly compressed, fast access binary: https://wiki.openstreetmap.org/wiki/PBF_Format

        Feature services must have editable backing sources, and always has the Map Server (Map Service) enabled as well. Typically, Feature Services are hosted from Enterprise Geodatabases. OGC has the type WFS (Web Feature Service) similar to Esri's "FeatureServer" type. 

        Read more at: https://enterprise.arcgis.com/en/server/latest/publish-services/windows/what-is-a-feature-service-.htm

##    Map Service (a picture of the data are created and sent):

        The map service is the way that you make maps available to the web using ArcGIS. You'll make the map in ArcMap, then publish the map as a service to your ArcGIS Server site. Internet or intranet users can then use the map service in web applications, ArcGIS for Desktop, ArcGIS Online, and other client applications. A Map Service always has cartography and usually is a bundle of layers, not just one by itself. Map services are not editable and are query/display-only because the client is looking at a "picture" of the data, and not the data itself. 

        OGC has the WMS (Web Map Service) which provides similar capabilities to the Esri "MapServer" type. 

        Read more at: https://enterprise.arcgis.com/en/server/latest/publish-services/windows/what-is-a-map-service.htm

    Share a web map to ArcGIS Online
    Due Mar 1, 2021 11:00 AM

##    Create 
    Using the Esri Documentation, now share the same web map published to Luna in ArcGIS Pro to your Account in Fleming's ArcGIS Online Organization. Name your Web Map "Canada Geom99 WebMap" and add at minimum the tag "Geom99". Make the map public and note what was created when you performed this, whether the data are copied and how the data appear in your item(s). 

    https://pro.arcgis.com/en/pro-app/latest/help/sharing/overview/share-a-web-map.htm

    Do not use the Luna published map service--this will re-share the Canada shapefile to ArcGIS Online. 
