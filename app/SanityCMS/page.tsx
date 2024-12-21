import Link from "next/link";
import React from "react";

export default function SanityCMS(){

    return (
<div>
<Link href="/TradionalCMS"><h6>TradionalCMS</h6></Link>
<Link href="/HeadlessCMS"><h6>HeadlessCMS</h6></Link>
<h6>WHAT IS SANITY IN WEB DEVELOPMENT</h6>
<p>Sanity is a modern, headless CMS (Content Management System) designed to help developers manage and deliver content seamlessly across various platforms. Here are some key features of Sanity:</p>
<ol className="relative list-outside marker:text-foreground-750 dark:marker:text-foreground-600 flex flex-col ms-5 marker:normal-nums marker:text-sm-strong">
<li>
<p><strong>Composable Content</strong>: Sanity treats content as structured data, making it easy to reuse across different channels and integrate with third-party technologies.</p>
</li>
<li className="ps-2">
<p><strong>Real-Time Data</strong>: It offers a real-time datastore that allows for instant content updates and collaboration.</p>
</li>
<li className="ps-2">
<p><strong>Customizable Studio</strong>: Sanity Studio is an open-source, customizable editing environment that can be tailored to fit your specific needs.</p>
</li>
<li className="ps-2">
<p><strong>Powerful APIs</strong>: It provides a robust set of APIs for managing content, including querying, creating, updating, and deleting documents.</p>
</li>
<li className="ps-2">
<p><strong>Flexible Asset Management</strong>: Sanity includes an asset pipeline for uploading and managing media files, with features like intelligent image cropping and scaling.</p>
</li>
<li className="ps-2">
<p><strong>Integration with Front-End Technologies</strong>: You can use Sanity with popular front-end frameworks like React, Vue.js, and Gatsby, among others.</p>
</li>
</ol>
<p>Sanity is ideal for projects that require high flexibility, scalability, and the ability to deliver content across multiple platforms</p>

<div>

<h3>Sanity.io is a cloud-based, open-source content platform that enables easy management, editing, and delivery of structured content across various devices.</h3>
<h3>It allows for endless reuse of content across different channels and offers a composable approach to connect with third-party technology and frontend frameworks.</h3>

<h5>HOW TO CREATE OR INTEGRATE SANITY WITH NEXT JS</h5>
<li>1- First create next js project  npx create-next-app@latest</li>
<li>install sanity studio</li>
<li>run this command</li>
<li>npm create sanity@latest -- --template clean --create-project "learning-sanity-project" --dataset production</li>
<li>just login via github</li>
<li><strong>Seamless Integration</strong>: Both Sanity and Next.js are built with React, making it easy to integrate them. You can use Sanity's powerful query APIs to fetch and shape data exactly how you need it</li>
<li><strong>Real-Time and Build-Time Data</strong>: You can use Sanity for real-time data updates or build-time data fetching, depending on your needs</li>
<li><strong>Live Previews</strong>: Sanity allows you to set up live previews for your Next.js site, so you can see changes in real-time before publishing </li>
<li><strong>Official Toolkit</strong>: Sanity provides an official toolkit for Next.js, simplifying the integration process</li>
<li><strong>Templates</strong>: Sanity offers fully configured Next.js templates to help you get started quickly</li>

<h6>CMS Content Managememnt System</h6>
<h6>Word press, Shopify, Sanity</h6>
<h1>these used for web design </h1>
<h5>IN traditional CMS front end managed in one go </h5>
<h3>A traditional CMS (Content Management System) is software used to create, manage, and modify digital content on websites without requiring extensive technical knowledge.</h3>
<h1>in wordpress content and front end only </h1>
<h2>in old days your content cant be used on other application</h2>
<h2>for example you made website its running smoothly </h2>
<h1>now you want to use this website on mobile app you cant </h1>
<h1>you have to convert or made changes to your content </h1>
<h6>HEADLESS CMS</h6>
<h1></h1>
</div>
</div>
)};  