# James Serendip Development Log
tracking research and development time spent toward Geom99 Final Project for Team "Web Delta"
## Week 9-10
    This week's focus has been on the week 9 checklist - to go through various tools and options for 
    developing web maps, web apps, and custom web solutions applicable to Geom 99 final project for team 
    Web Delta, and also research for possible solutions for final collaborative project (Team Happy Puppies)

####    March 15 - Working through checklists
            Set up DuckDNS, SSL Certification
            Watch video on managing Portal from Map/Pro
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** SSL Cert works but still shows security warnings (because of changing Duck DNS I guess)  
ArcGIS Pro ONLY ALLOWS 1 PORTAL open at a time!  Change in Project tab  
**Outcomes:** Completed DNS, certifaction, video  
**ToDOs:** runArcGIS Server on EC2  
**Time Spent:** 1.25 hours  
**Resource Links:** <https://www.duckdns.org/domains>  video: <https://youtu.be/KItDcnDQce0>  

####    March 16 - Working through week 9 checklist
            Watched 2 videos on Experience Builder
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** like dashboard on steroids  
There is a LOT of back-end programming on this!  
**Outcomes:** Completed videos  
**ToDOs:**       
**Time Spent:** 1.25 hours  
**Resource Links:** video 1: <https://www.youtube.com/watch?v=pNrsd5naN7U>  video2: <https://www.youtube.com/watch?v=Vu6_pBa7zis>  

####    March 18 - Working through week 9 checklist
            Experimenting with Experience Builder
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** some widget functionality not what it seems!  
Everything set through Properties panel on right, but some settings are tricky  
**Outcomes:** Created very basic experience builder template  
**ToDOs:** Test and expand capabilities of Experience Builder example  
**Time Spent:** 1 hours  
**Resource Links:** <https://experience.arcgis.com/experience/faa94141a36048dcbcb9bac5b83db5b0/>

####    March 19 - Working through week 9 checklist
            Expanding Experience Builder proof-of-concept
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** widgets and functionality very keyed to data sources - need to be clear on what layers are where!  
**Outcomes:** Activated Map View, discovered Feature View widget (useful!)  
**ToDOs:** Feature View seems to be reseting initial map in Experience Builder example - explore  
**Time Spent:** 1 hours  
**Resource Links:** <https://account.mapbox.com/>


## Week 10-11
    Working through Experience Builder to determine if we want to use it for our project or switch to StoryMaps
    because of the difficulties and bugs we ahve encountered so far with Experience Builder.
####    March 22 - Working through week 9 checklist
            Create and Explore Mapbox account
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** mapbox more programming/less GUI  - versitile, useful, but needs research to execute  
**Outcomes:** account created and some exploration  
**ToDOs:** create and embed a map using mapbox  
**Time Spent:** 0.5 hours  
**Resource Links:** <https://account.mapbox.com/>  

####    March 23 - Working through week 9 checklist
            Create and Explore Leaflet account
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** very API-ish  
**Outcomes:** account created and some exploration  
**ToDOs:** create and embed a map using leaflet - need more exploration of this one  
**Time Spent:** 0.25 hours  
**Resource Links:** <https://esri.github.io/esri-leaflet/>

####    March 24 - Working through week 9 checklist
            Research and experiment with ESRI WebAppBuilder
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:**  working this after working with experience builder I see that this is maybe slightly easier, but way less customizable  
**Outcomes:**   Created WebApp example called Test  
**ToDOs:**       
**Time Spent:**  0.5 hours  
**Resource Links:** <https://fleming.maps.arcgis.com/apps/webappviewer/index.html?id=06ae26881a784cdfb79f61fa51c12216>  

## Week 11-12
####    March 25 - Working through week 9 checklist
            Web Delta/Happy Puppies team meeting to discuss use of Experience Builder
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:**  there are worrisome bugs in Experience Builder, but also useful functionality, so it's a trade off.  We all found the interactivity of the widgets and data challenging to manage, and were particularly unsettled by the way the main map view keeps adjusting to selections in feature views.  When Shawn met with us, suggested to just use the Views to fix this!  
**Outcomes:**   we are all excited to try Experience Builder, but nervous that it may be more difficult that it's worth for us  
**ToDOs:**     Experiment with content for the remaining 2 Views in Experience Builder  
**Time Spent:**  1 hours  
**Resource Links:** 

####    March 26 - Experience Builder Exploration
            After meeting with Shawn, we have decided to try more to make Experience Builder work for us  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** This tool is cumbersome and buggy, but very versitile!  
**Outcomes:** 1) Use Different views to be able to show correct initial view of map  
since the Feature Views widget will cause a selection to zoom the map initially regardless of  
initial map settings.  This works great and helps me understand different ways to use the views feature.  
2) The text for the Views menu is NOT EDITABLE in the widget properties!  Only in the page menu.  
3) The Filter widget is amazing.  Added a View 2 for visualizing Stream Order using a series of filters  
for the user to select streams of order 1, 1&2, 1&2&3, or greater than3.  Very cool!  
**ToDOs:** create additional content for Views 1 and 2  
**Time Spent:** 0.75 hours  
**Resource Links:** <https://experience.arcgis.com/experience/faa94141a36048dcbcb9bac5b83db5b0/>  

                      
####    March 29 - Constructing additional Views in Experience Builder
            I have been working with a template in Experience Builder that uses 3 views,
            and I have found that I can use the views not only to sort my data presenatation, but also to highlight thematic concepts.
            Created stream order dynamic segmentatin map in ArcGIS Online Map Viewer from base stream map.
            View 2 is now set to allow the user to filter the streams visible on the main map by Strahler Stream Order
              
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** User-selected filters allow a degree of user-interactivity that can be helpful for our purposes - to be able to select streams by order.  
**Outcomes:** 1) View 1 now has the basic map of our study area in the Rice Lake Plains along with an inset that shows stream order by dynamic segmentation.  
2) I included our Team Logo with a link to a shell URL for our team.  
3) View 2 now shows the Streams in our area.  There is a series of optional filters so that the user can choose to view only 1st order streams, only 1st & 2nd order, 1st, 2nd & 3rd order, or only streams above 3rd order.  
**ToDOs:** Create content for View 3, perhaps focusing on other waterbodies and/or nature conservation?    
**Time Spent:** 1.25 hours    
**Resource Links:**stream order web map: <https://fleming.maps.arcgis.com/home/webmap/viewer.html?webmap=a623ec91c98440539270c9af3b80428f>

####    March 30 - Accessing SDE GDB on Virtual Server
            Kevin Rabjohn created an Enterprise geodatabase for our collab group to use for our data handling on the Fleming virtual server, but it would not give us permission to register features as versioned.  A new GDB was constructed for us which did work fine. 
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** There are many layers of complexity to permissions in Enterprise!  Kevin was not able to figure out why we could not register our features classes as versioned. Talking to Rahul, it seems it may be his attempt to give us too many privileges that then ironically interfered with the privileges we needed.   
**Outcomes:** Kevin created a new GDB for us that works correctly, with a new user code. Kristine already uploaded most of our current data.  
**ToDOs:** Start creating individual users and user versions so we can begin to explore the data.    
**Time Spent:** 0.5 hours    
**Resource Links:**

## Week 12-13

####    March 31 - Meeting with other Experience Builder teams in Geom 99
            Team Web Delta met with the other teams in Geom99 that are using Experience builder to share ideas and inspiration, challenges and difficulties.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** Experience Builder can make a huge range of looks and functionality, so we need to really examine how we want to structure our project.  Some of the other teams showed prototypes using scrolling pages, beautiful graphics, other templates... a lot of it looked really good, but lacked the level of functionality of our current prototype.  
**Outcomes:** We decided we would all try out some different templates to explore other looks.  We still want to have a shell page in github to hold our AGOL content, but want to make that content also have an essentially "stand alone page" look.    
**ToDOs:** Create another Experience Builder prototype with a different look/template.    
**Time Spent:** 1 hour    
**Resource Links:**

####    April 1 - Researching Stream Order Definitions
            Since for this project Team Web Delta is doing a potential mock-up for our collab project (for Team Happy Puppies) which involves making a dynamic map of headwaters, it is important to understand the definition of headwaters and different systems for classifying and identifying headwater streams.  Toward this end, I read several papers on Headwaters, most usefully from Ontario Headwaters Institute (OHI) and Toronto and Region Conservation Authority (TRCA) - see links below.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** Most sources consider headwaters to be Strahler Order 1 or 2, but some use 1,2 & 3, and there is even talk of "zero order" headwaters that are more ephemeral swales.  
**Outcomes:** We will discuss this with our client to see if they have a specific working definition we must adopt, otherwise will go with defining headwaters as Order 1 and 2.    
**ToDOs:** Discuss in client meeting April 7   
**Time Spent:** 1.5 hours    
**Resource Links:** Ontario Headwaters Institute Backgrounder: <https://ontarioheadwaters.ca/watershedmanagement/>  Toronto and Region Conservation Authority: <https://trca.ca>

####    April 5 - Started new Experience Builder Prototype
            To explore possible layouts and looks for our project I begin a second Experience Builder, this time using the "Pocket" template.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** The "pocket" template is very map-centric.  It focuses mostly on the use of bookmarks to highlight locations/objects on the map.  
**Outcomes:** I am finally starting to understand how bookmarks work!  Also, learned that the display size settings are NOT just to "view" how it will look on different displays, but that you can set particular views to work in particular displays.    
**ToDOs:** Flesh out this pocket template prototype and see what it can do!   
**Time Spent:** 0.75 hours    
**Resource Links:**

####    April 6 - Meetin with Team Members to discuss strategies prior to client meeting
            This meeting was largely to prepare for our client meeting April 7, but we also focused on the Geom99 project/dynamic map deliverable for collab.  We talked about what we have found so far with Experience Builder.  Kate is still getting the feel of Experience Builder overall, and Kristine is digging in to the actual developers side a bit.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** We will likely want to use a little of the developers functionality at some point, probably more for our actual final collab deliverable.  I am finding the widgets and templates just in their COTS form all seem to get clumsy in their interactions and settings.  I also am learning that I do NOT have the best visual design eye... It is hard for me to tell what looks good or bad on a page until it is done, so I really benefit from looking at the work of others with more design sense!  I am seeking out more Experience Builder Examples. 
**Outcomes:** I am finally starting to understand how bookmarks work!  Also, learned that the display size settings are NOT just to "view" how it will look on different displays, but that you can set particular views to work in particular displays.    
**ToDOs:** Keep finding new experience examples and trying other templates and options   
**Time Spent:** 0.5 hours    
**Resource Links:** Good example of Experience Builder with similar level of functionality to what we will want: <https://experience.arcgis.com/experience/2f68463e81294f37a68c8ef442e85b29?data_id=dataSource_3-Current_Dev_Proj_Read_Only_1586%3A34>

####    April 7 - Meeting with Team Members and Collab client NCC
            We met with our collab clients to discuss headwater definition, methodology for mapping, and specifics of deliverables, especially the dynamic map which is the focus of our geom99 project.  Demo'ed current prototype Experience Builder for clients and it really inspired them and started discussion which got us to a very different understanding of what they really want!  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** We had been operating under the premise that our collab clients' primary interest was in a static map of headwaters, but after demo'ing the Experience Builder they really got excited and as we questioned and dicussed further we realize they intend for the dynamic map to really be the main functional deliverable, and the static map is more of a display piece.  So this puts more importance on our geom99 work!
**Outcomes:** Client loved the look of the dark basemap with streams showing in different colors by stream order for the static map as a large "poster".  They are also interested in the idea of making streams "clickable" to highlight their downstream progeny, and also filterable by water quality data.   
**ToDOs:** Find Cold Water data, get Scoop2018 tiles from Tessa, explore further filtering options in Experience Builder   
**Time Spent:** 1 hours    
**Resource Links:** Possible source for water quality data: <https://data.ontario.ca/dataset/provincial-stream-water-quality-monitoring-network>


## Week 13-14

####    April 7 - Explore settings for Lists in Experience Builder in new jewlreybox template
            Deep dive into the list widget and text widget within the list - worked on filtering data and creating new data views from filtered data. 
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** Created custom data view to filter out only named headwaters greater than 750 meters.  Discovered how to set dynamic text to label list items from data source field - gives 3 options: auto-populate, Selected Features, data source - MUST use data source for it to be truly dynamic!  other options populate entire list with the value of selected field in first feature. 
**Outcomes:** Created a list that is ONLY named streams order 1 or 2 and longer than 750 meters with each item in the list labelled by name and stream order with alternate style for selected list item.   
**ToDOs:** incoporate this functionality in a more cohesive template   
**Time Spent:** 1.75 hours    
**Resource Links:** <https://experience.arcgis.com/experience/097faec5dc794430aab68a8404bf4275>

####    April 8 - Team meeting going over Experience Builder prototypes
            Showed my team what I learned about filtering lists and dynamic text.  Team members had designed experiences that have a more cohesive website-ish look.  These are good for this Geom99 project!  We decided I should continue to focus on learning functionality and they will continue to work on design and look.  Began working on another experience sample to explore using bookmarks to switch between map layer views.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** I'm still having trouble using bookmarks!  It seems that they are for zooming, seelcting, highlighting and annotating map sections (or other content) but not for switching to different data.
**Outcomes:** Still looking for the best way to have user-controlled switching between map content (stream orders) that looks consistent and is easy to use.   
**ToDOs:** Work more with views or multiple maps.   
**Time Spent:** 0.5 hours    
**Resource Links:**

####    April 9 - Team meeting w/Shawn and follow-up work with Hub
            Going over our status in class, Shawn suggested we look into using Hub instead of HTML on Github for holding our content for this project.  We all liked the idea of it and the look, so began playing around with Hub layouts.  
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** Hub is basically a flexible template that easily constructs a website-ish look from content that includes ESRI-generated and housed content (AGOL stuff).  Seems simpler to use than Experience builder, but less functionality, just easier design.
**Outcomes:** We all felt that Hub was worth pursuing as the overall container for our Geom99 project, though it will not be used for our Collab project deliverable since they are looking strictly for functionality and so Hub would not add to that, just create another layer for the user to work through.  We all begain exploring Hub designs.   
**ToDOs:** Start integrating some of the Experience pieces into Hub.   
**Time Spent:** 1 hours    
**Resource Links:**

####    April 12 - Created multiple web maps to consume in Experience Builder or Hub
            To give me more options for displaying different data in different way, I created multiple separate web maps with just certain categories of stream order, publishing them to AGOL from Pro. 
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** Because Hub lacks some of the functionality of Experience Builder, we can make up for that by doing more data preprocessing in Pro and just having more individual resources in AGOL to drawn from.
**Outcomes:** Created a menu in Hub to view stream order maps by stream order.  I did not get at all a complete Hub built, and then there was a problem with the account/access-token, and it would not save, so have to redo it, but at least figured out a way to display the content I want.   
**ToDOs:** In lab this week the team will all work on combining our various pieces in a cohesive Hub.   
**Time Spent:** 1.25 hours    
**Resource Links:** no link since there was a problem and could not save.

####    April 13 - Team Meeting with Advisor
            Team met briefly with Paige and filled her in on the developments from our client meeting previous week.  She was suprised to hear the direction the client's interest has taken, as she too thought they were mostly interested in the static map, so agrees with the emphasis for Collab being more on the dynamic app.  We discussed concerns about functionality of clickable streams that select downstream segments, but since this can be accomplished with filters in Experience Builder, I am confident we can find a way to make it more "point-and-click". 
##### Insights, Outcomes, ToDos, Time Spent and Resource Links
**Insights:** I might need to learn how to modify the widget geojson code in the jimu-library.
**Outcomes:** Began modifying some old hydro data to use for test case, since our current stream data does not contain "Nextdown_ID" info.   
**ToDOs:** Watch more Experience Builder for Developers demos and tutorials for modifying widget code, bring Nextdown_Id data into Experience.   
**Time Spent:** 0.5 hours    
**Resource Links:**

## Week 14-15



# Esri Configurables

##     Experience Builder

    ArcGIS Experience Builder is relatively new (about 1 year) and allows you to configure web apps without writing code. Build mapcentric or nonmapcentric apps and display them on a fixed or scrolling screen, on single or multiple pages. Perform a drag-and-drop operation to choose the tools you need from a rich set of widgets, design your own templates, and interact with your 2D and 3D content—all within one app. With ArcGIS Experience Builder, your web apps look great and run seamlessly on mobile devices.

https://www.esri.com/en-us/arcgis/products/arcgis-experience-builder/overview

https://www.youtube.com/watch?v=pNrsd5naN7U (short into)

https://www.youtube.com/watch?v=Vu6_pBa7zis (how to)
    
##    WebApp Builder

    WebApp Builder is the original "configurable" ArcGIS Online solution and is a little dated. It includes built-in tools so you can create 2D and 3D web apps for your workflows and your brand. It's user-friendly, flexible, and full of GIS functionality. Developers can build custom widgets and themes to extend ArcGIS Web AppBuilder. Display and analyze your data on any device without writing code. There is also a developer edition allowing customization by deploying the libraries on your own server or portal.   

Marketing page: https://www.esri.com/en-us/arcgis/products/arcgis-web-appbuilder/overview

Documentation tutorials and examples: https://doc.arcgis.com/en/web-appbuilder/

https://www.youtube.com/watch?v=nIYE-_Nhdec (2017 UC Presentation)
    
##    ArcGIS Dashboards

    ArcGIS Dashboards present location data using interactive data visualizations on a single screen. Typically Dashboards are meant for managing or communicating information rolled-up into graphs and simple maps. The famous COVID-19 dashboard really "put this on the map". Tailor dashboards to your audiences, giving them the ability to slice the data to get the answers they need. Dashboards are essential information products, like maps and apps, providing a critical component to your geospatial infrastructure.

https://www.esri.com/en-us/arcgis/products/arcgis-dashboards/resources

https://www.youtube.com/watch?v=zrxYWzSvJ6E (2018 UC Presentation)

##    Esri StoryMaps

    Create inspiring, immersive stories by combining text, interactive maps, and other multimedia content.

https://storymaps.arcgis.com/

https://www.youtube.com/watch?v=t_oFnIIJA-A (40 minute 2020 presentation)
    
##    Focused Configurable Apps

    Configurable apps help developers deploy maps and tools to their end-users, inside highly customized web applications fast, sometimes within minutes.

https://github.com/topics/4x-configurable-app

https://www.youtube.com/watch?v=PQjvUVwqic8 (4 minute UC presentation)

# Open Source solutions.

##    Leaflet JavaScript API

    Leaflet is a lightweight open-source JavaScript library for mobile-friendly interactive maps. It does not need any licenses to run and is simple to use, small (38k library download to your browser), and really cool!  You can learn more about Leaflet here:

https://leafletjs.com/index.html

    Esri created a "port" to allow leaflet to use ArcGIS Server services too. This is a much easier/simpler alternative to the Esri provided javascript APIs. 

https://esri.github.io/esri-leaflet/

    Review these items as they may be useful for your collaborative project and are great alternatives to Google and Mapbox's pay-per-map model, and the very expensive Esri suite of software. 
    Geoserver

##    Geoserver allows you to host and share GIS data over the web as OGC types, like WMS, WFS and WMTS. It is a good ArcGIS Server replacement (middle tier). Combined with a database like PostgresSQL/PostGIS and an API JavaScript library like Leaflet, it can be a complete solution comparable to ArcGIS Enterprise. 

http://geoserver.org/

https://youtu.be/7bbq3gWEXI8

https://youtu.be/Gjfb4cF_j8k

https://youtu.be/ym1b2NDDAQY

https://youtu.be/8lhwczAjCec
    
##    OpenStreetMap

    OpenStreetMap is a collaborative project to create a free editable map of the world. The geodata underlying the map is considered the primary output of the project.

https://www.openstreetmap.org/#map=3/71.34/-96.82
    
    
##    qField for Android Devices

    QField allows you to efficiently work on your GIS data outdoor. QField is based on QGIS. It is not a rebuild of QGIS it really does use QGIS libraries. The rendering engine is exactly the same as in QGIS for desktop and your project will therefore look exactly the same on your mobile device as it does on your computer.

    
https://qfield.org/


##    KoboToolbox

    KoboToolbox uses much of the same components as Survey123, except the data are stored in an internal MongoDB (NoSQL Database). There is a hosted (SaaS) version, as well you can deploy your own KoboToolbox to environments in a Docker container (like a VM, but simpler). This is an excellent alternative to Survey 123 and is truly open source. 

https://www.kobotoolbox.org/

# Mapbox API

    Create your own Mapbox Style

    Using Mapbox Studio, create and apply your own style to your required demo solutions. 

    This item will contribute to a bonus in Practical Lab 4. 
    Mapbox: Create a Mapbox account

Create your own Mapbox account: https://account.mapbox.com/auth/signup/

    Familiarize yourself with how to get your own access token. 
    Mapbox: Modify these Demos using your ArcGIS Server map service

    Mapbox is easy to use, even with limited programming knowledge. We can access your Luna or AWS ArcGIS Server published Canada map in multiple ways in Mapbox. Modify each of the following examples to use your own ArcGIS Server published (and started) service and place the result into your own Github or HTDOCS account.

    This first example "hacks" Mapbox into thinking a map return is WMS. In reality, this does not need the WMS capabilities enabled on your service, because the URL returns only a PNG image and mimics the functionality of WMS. Modify this example to use your published map service. Notice how your configured cartography is maintained in this example. That is because this exports just a "picture" of your map and displays it in the coordinate system used by Mapbox. 

https://shawnmflemingc.github.io/mapboxdemo.html

    The next example uses the GeoJSON export capability in a layer query request from ArcGIS Server and the ability for Mapbox to read and use GeoJSON as a layer. Because GeoJSON exports only the geometries, there is no cartography from your map service used--instead Mapbox has its own "painting" defined. First, modify the ArcGIS Server URL to use your own published Canada map service on Luna. Next, modify the query of the ArcGIS Service URL to return one or more provinces. Be sure to modify the example, as just showing "Ontario" as the example does will not be acceptable for the last checklist. 

https://shawnmflemingc.github.io/mapboxgeojson.html

    These modified examples are great ways to get your own map service on your own GitHub or HTDOCS account running. Feel free to give it a try!

    Projection Problems?

    If your Canada shows up in Africa likely your service is not in Web Mercator projection. By default the services were published how the data are stored, in PCS_Lambert_Conformal_Conic. Not sure? Check on the REST endpoint, see how your service was published on the MapService REST page under Spatial Reference. It will start with PROJCS["PCS_Lambert_Conformal_Conic if it was this case. To be compatible with Mapbox, it should have been Spatial Reference: 102100  (3857) . The map request for MapBox must therefore "reproject" your map into Web Mercator to work.

    This example does that:

https://shawnmflemingc.github.io/mapboxagsprojection.html

    NOTE: The portion {bbox-epsg-3857} MUST be exactly this in the URL/do not URL encode it. This is to specify the bounding box for each image request. This will be "replaced" by Mapbox whenever it makes a request, using the actual coordinates for the requested bounding box. 

# Vertigis Geocortex and Rolta's OnPoint

    Geocortex: Videos

    Geocortex Essentials is created by Vertigis, and is one of many products available in their "Geocortex" product line. Many organizations purchase Geocortex to add on to their ArcGIS Server because it is easy to deploy, maintain and configure. Think of it as an alternative to ArcGIS Online or ArcGIS Portal, where users interact with a "google maps" like interface that is easily configured by the sites' administrators.

    There are 2 main product series. 
        Geocortex Essentials 4
        Geocortex 5 Series products
    Geocortex Essentials 4 (For use with ArcGIS Server directly)

    This product predates ArcGIS Portal and ArcGIS Online. It is a purchased product meant for local/on premise installations only (there is not really a cloud option). Esri's focus on ArcGIS Online and Enterprise/Portal has moved many away from this version of the software, however there are still numerous examples using this. 

    For example:
        Federal Governments: Norway, Australia
        Most Canadian Provincial Governments: Alberta, Ontario, NWT, Quebec
        Many Canadian Municipal Governments: https://maps.brant.ca, https://maps.waterloo.ca, http://mapit.islandstrust.bc.ca/, https://maps.kelowna.ca/public/mapviewer/
        Internationally: London City, New York, Austin Texas, Belgium

    Plus about 400+ more "clients". 

    Watch this marketing overview of the product. It gives some ideas of what is possible, but is more high-level than what you'll need to figure how to make it work. Frequently when having a company try and sell you something they provide non-technical flashy content like this, which makes making technical decisions challenging. To get a true feel for this product by asking you to configure some items using step by step instructions (optional item). 

Marketing Demo: https://www.youtube.com/watch?v=nLtWz9iP3H0 (generic and has a lot of "buzz words" but still frames product scope)

    Note: Many municipal opportunities value Geocortex Essentials and 5 experience. To help you, I've negotiated an exclusive relationship with Vertigis to make the product available to you. 

    Explore more by watching at least the videos here and creating your own site (see the item in the Optional section of this weeks' checklist): 
        Introduction to Geocortex: https://www.youtube.com/watch?v=olp1q9bRuoU (6 minutes)
        Product Architecture Overview: http://www.youtube.com/watch?v=0iDtvIEiw7k (11 minutes)
        Optional: Browsing and Managing Sites: http://www.youtube.com/watch?v=fGZqyeyh__o (2 minutes)
        Optional: Rest Management tour: http://www.youtube.com/watch?v=vNyfOtRukcs (10 minutes)

    Questions related to this item may be asked as part of your next practical lab and final exam. 
    Geocortex: Take a look at this Demonstration Site for Local Government

    This demo site for Geocortex Essentials was created to show new users what could be completed. It is built with help from the Los Angeles government, and uses a version of their data. Give it a try and explore! 

https://gedemo.geocortex.com/Html5Viewer/index.html?viewer=Government

    This product, as configured, uses Map Services published in ArcGIS Server alone and does not need the full stack deployment of ArcGIS Enterprise to work. 

    Here is a list of Geocortex 5 demo sites:

https://gedemo.geocortex.com/GeocortexDemos/

    Geocortex 5 "versions" are integrated into ArcGIS Online and their configuration is stored in items. It requires ArcGIS Online or an ArcGIS Enterprise implementation to use it, and thus has been slow in its adoption. 

    Understanding what is possible using Geocortex may be tested on in your practical lab or final exam
    Geocortex: Create your own site - step by step

    Follow the instructions here to create your own Geocortex site on the server Luna. 

    Geocortex Intro.pdf
    Read and Explore: Rolta OnPoint

    Rolta's OnPoint product is another Canadian-born product that many municipalities have worked on. Formally Orion Technologies out of Richmond Hill, the company was bought by Rolta in the mid-2000's and since then has focused on large multinational companies with OnPoint, A few municipal clients still use it, including Kitchener Ontario, which was OnPoint's first client!

City of Kitchener: https://map.kitchener.ca/OnPointExt/WebPages/Disclaimer.aspx?ReturnUrl=%2fOnPointExt%2fWebPages%2fLanding%2fPublic.aspx

    This is another configurable "add on" to ArcGIS Server. Understanding solution possibilities is important for your final exam, which this contributes. 