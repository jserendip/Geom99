ArcGIS Architecture and REST Interface
 
0 %0 of 6 items complete
Show data table for Item Completion.
Items to Complete
Read: What is ArcGIS Enterprise?Due Feb 22, 2021 11:00 AM
Read ArcGIS Enterprise is a product bundle or marketing term for components that deliver an ArcGIS Online-like experience for on-premise installation. The minimum bundle for a usable solution is called a "base deployment". ArcGIS Server is the workhorse which provides the actual "GIS" capabilities in the base deployment. This help document helps give context and details of the enterprise software solutions by esri. 

https://enterprise.arcgis.com/en/get-started/latest/windows/what-is-arcgis-enterprise-.htm

Review: Clients for ArcGIS EnterpriseDue Feb 22, 2021 11:00 AM
Review There are many clients that can share, use, contribute or manage an ArcGIS Enterprise environment. Check out this comprehensive list. Notice how applications like Dashboards, Field Maps, Story Maps, and Survey 123 are listed as if they are not part of ArcGIS Online--this is because they technically aren't! I believe Esri will one day unbundle ArcGIS Online and Enterprise further, then license each tool separately. 

https://enterprise.arcgis.com/en/get-started/latest/windows/portal-clients.htm

Review: What is ArcGIS Server?Due Feb 22, 2021 11:00 AM
Review ArcGIS Server is the software that powers data and spatial capabilities in all of Esri's enterprise and online functionality. At the core it shares map services, which are made available through a URL with a REST interface (aka endpoint).  ArcGIS Server used to be a one-license product, but in 2016 esri de-bundled it and requires separate licenses for some functionality.

https://enterprise.arcgis.com/en/server/latest/get-started/windows/what-is-arcgis-for-server-.htm 

Installing ArcGIS Server gives these components, which can be federated (use with a portal to support a base deployment of ArcGIS Enterprise) or used stand-alone (by itself). Note that a federated ArcGIS Server requires User-based licensing, and a stand-alone server is per install/CPU licensing. Many municipalities still use stand-alone ArcGIS Servers and do not federate with a portal. 

https://enterprise.arcgis.com/en/server/latest/get-started/windows/what-s-included-with-arcgis-server.htm

Read It is important to understand that 10.9 (the next release) will be the last that supports publishing from ArcMap (MXDs). This is a huge opportunity for you (as a new graduate) to seek new jobs and be competitive with even the most experienced GIS professionals, as most workplaces will need to migrate their published ArcGIS Server maps from MXDs to ArcGIS Pro and will seek experienced knowledgeable new hires (you!). 

https://www.esri.com/arcgis-blog/products/arcgis-enterprise/announcements/removal-of-arcmap-based-runtime-from-arcgis-enterprise/

Understand how to navigate the REST Services Directory APIDue Feb 22, 2021 11:00 AM
At the heart of ArcGIS Server is the REST API to interact with data and map services. The ArcGIS Server REST Endpoint can be "navigated" using a human-friendly HTML website, or an Application-friendly JSON interface. Irrespective of how you use the ArcGIS REST API (JSON or HTML), you must understand how to construct a URL to manipulate and retrieve spatial and non-spatial data. All resources and operations exposed by the ArcGIS Services portion of the REST API are accessible through a hierarchy of endpoints for each GIS service published with ArcGIS Server or a Federated ArcGIS Portal (and ArcGIS Online). This article explains how to use the ArcGIS REST API.

Review this page to help get a context of what the REST API does for ArcGIS Online.

Review https://developers.arcgis.com/rest/services-reference/get-started-with-the-services-directory.htm

Complete the following ESRI class Introduction to the ArcGIS for Server REST API :

Earn  https://www.esri.com/training/catalog/57630436851d31e02a43f16a/

Be sure to earn the certificate as it will be checked as part of the next practical lab. An 80% is the minimum score needed by Esri's learning environment to obtain the certificate (which is considered a 60% in this course, A 90% is 80%, and 100% (perfect) is 100%). 

Review Finally look at the output formats that are possible using the REST API. Note there are a few we have learned about, and some we haven't yet! 

https://developers.arcgis.com/rest/services-reference/output-formats.htm

ArcGIS Server 101Due Feb 22, 2021 11:00 AM
Read ArcGIS Server is the backbone of Esri's web-gis solutions. Read through the article about ArcGIS Server to get an overview of its software architecture. In this class we dive into ArcGIS Server to use your own install of it on a server in Amazon Web Services (AWS). 

The article is available in PDF:

http://www.esri.com/~/media/Files/Pdfs/news/arcuser/0313/arcgis101.pdf 

and as a website

https://www.esri.com/about/newsroom/arcuser/arcgis-for-server-101/  

Note: Esri changed their marketing multiple times, at 10.1 to add "for" between ArcGIS and the platform, then added a "for" after ArcGIS (like "ArcGIS for Enterprise"), and most recently dropped the "for" preceding ArcGIS in most products. You can still find remnants of this "for" throughout the product GUI and Esri documentation.

Comfirm you can Login to AWSDue Feb 22, 2021 11:00 AM
NOTE: Do not attempt this before your lab. 

Create Using this program login using your Fleming Username and Password to retrieve an initial password for GEOM99's AWS configuration. Then then login to AWS using this username and the initial password to finalize the creation of your AWS account.

https://luna.flemingcollege.ca/Geom99/AWS/getpass.aspx

(Curious about this little server-side ASPX program? Here is the actual server and client code version without passwords shown)
