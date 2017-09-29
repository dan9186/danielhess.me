import React from 'react'
import ReactDOM from 'react-dom'

import 'whatwg-fetch'
import './style.css'

export class Resume extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="container sections-wrapper">
                <div className="primary col-md-8 col-sm-12 col-xs-12">
                    { this.render_about_me() }
                    { this.render_tech_experience() }
                    { this.render_prof_experience() }
                </div>
                <div className="secondary col-md-4 col-sm-12 col-xs-12">
                    { this.render_info() }
                    { this.render_eduction() }
                    { this.render_accomplishments() }
                    { this.render_references() }
                </div>
            </div>
        )
    }

    render_about_me() {
        return (
            <section className="section">
                <div className="section-inner">
                    <h2 className="heading">About Me</h2>
                    <div className="content">
                    </div>
                </div>
            </section>
        )
    }

    render_tech_experience() {
        return (
            <section className="section">
                <div className="section-inner">
                    <h2 className="heading">Technical Experience</h2>
                    <div className="content">
                        <h4>Languages</h4>
                        <h4>Frameworks</h4>
                        <h4>Infrastructure</h4>
                        <h4>Tools</h4>
                        <h4>Systems</h4>
                    </div>
                </div>
            </section>
        )
    }

    render_prof_experience() {
        return (
            <section className="section">
                <div className="section-inner">
                    <h2 className="heading">Professional Experience</h2>
                    <div className="content">
                        <h3>Senior Software Engineer<span className="pull-right date-range">January 2016 – Present</span></h3>
                        <h4>Treetop Commons, LLC<span className="pull-right"><i className="fa fa-map-marker"></i> Portland, OR</span></h4>
                        <hr />
                        <i className="fa fa-2x fa-caret-down pull-right" data-toggle="collapse" data-target="#experience-1"></i>
                        <div id="experience-1">
                            <h4>Responsibilities</h4>
                            <ul>
                                <li>Write, maintain, and collaborate on RESTful API for consumption by multiple clients</li>
                                <li>Expand and improve use of large graph data store built on Postgres</li>
                                <li>Create and maintain documentation of API for client consumption</li>
                                <li>Assist in any architectural concerns of current and new environments</li>
                                <li>Serve as secondary for devops tasks to distribute knowledge and improve processes</li>
                                <li>Assist in interpretation and creation of reports requested by customers</li>
                                <li>Participate in Scrum and other flavors of Agile for team management</li>
                                <li>Work closely with both collocated and remote coworkers in the Engineering Team</li>
                                <li>Share and expand knowledge of team around best practices of Golang and automation for deployment</li>
                            </ul>
                            <h4>Achievements</h4>
                            <ul>
                                <li>Implemented acceptance tests for the API using Cucumber</li>
                                <li>Added Cucumber tests to build chain as a blocker to Pull Requests</li>
                                <li>Created Dockerized setup of front end projects allowing QA to test branches prior to merges</li>
                                <li>Reduced bloated Vagrant devbox from an hour long manual process to a small repeatable setup</li>
                                <li>Implemented vendoring of API dependencies into the repo in place of relying on numerous checkouts from Github</li>
                                <li>Provided proof of concept for a document as you code approach to API documentation</li>
                                <li>Created proof of concept for Dockerized API development environment to remove the need for Vagrant devbox and allow for local development of API</li>
                                <li>Drove changes in Agile process to have sprint planning, estimating, grooming, and retrospectives that were not happening previously and resulting in significant churn during a sprint</li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="content">
                        <h3>Devops Engineer<span className="pull-right date-range">June 2014 – Dec 2015</span></h3>
                        <h4>Monsoon Commerce<span className="pull-right"><i className="fa fa-map-marker"></i> Portland, OR</span></h4>
                        <hr />
                        <i className="fa fa-2x fa-caret-left pull-right" data-toggle="collapse" data-target="#experience-2"></i>
                        <div id="experience-2" className="collapse">
                            <h4>Responsibilities</h4>
                            <ul>
                                <li>Maintain automation scripts and tools for Continuous Deployment</li>
                                <li>Maintain TeamCity environment for Continuous Integration and Deployment</li>
                                <li>Maintain AWS environments, accounts, and bill</li>
                                <li>Assist in any architectural concerns of current and new environments</li>
                                <li>Maintain security and sanctity of cloud environment</li>
                                <li>Monitor and optimize cloud environment resources and costs</li>
                                <li>Write, maintain, and collaborate with teammates on RESTful web services for high volume traffic</li>
                                <li>Assist QA with writing Cucumber based Integration Tests for services</li>
                                <li>Provide communication to external teams for visibility and conveying impact to customers</li>
                                <li>Participate in Kanban and other flavors of Agile for team management</li>
                                <li>Participate in on call schedule for bugs and infrastructure issues</li>
                                <li>Share and expand knowledge of team around best practices of automation for deployments</li>
                            </ul>
                            <h4>Achievements</h4>
                            <ul>
                                <li>Rewrote a Java microservice in Golang, increasing its speed, accuracy, efficiency, and resiliency</li>
                                <li>Significantly reduced AWS bill through coding and architectural changes on multiple occasions</li>
                                <li>Implemented 12 factoring of all new projects and brought out of date old projects up to speed</li>
                                <li>Created interfaces and architecture for web store integration project, significantly improving development time and maintainability</li>
                                <li>Rewrote several internal projects to open source none project specific sections of code</li>
                                <li>Drove Go design changes to allow for better mocking and transition of Ruby written integration tests into Go</li>
                                <li>Designed Makefiles for releasing and deploying services locally or via Continuous Integration system</li>
                                <li>Integrated centralized key store with service integration tests for test configuration values</li>
                                <li>Implemented regular backups of service databases</li>
                                <li>Dockerized stating and monitoring infrastructure</li>
                                <li>Dockerized various projects for easier migration and localized testing</li>
                                <li>Dockerized primary storage project and immediate dependencies for localized, automated integration tests</li>
                                <li>Deployed a Fleet driven environment to run Dockerized services</li>
                                <li>Expanded Ansible configuration scripts to prevent destruction of existing dependencies</li>
                                <li>Continued the charge of a culture of testing environment resiliency and ensuring maximum uptime as others departed</li>
                                <li>Assisted in architecture and development of a Golang based strangler for a legacy Java service</li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="content">
                        <h3>System Administrator I<span className="pull-right date-range">June 2013 – June 2014</span></h3>
                        <h4>St. Jude Children's Research Hospital<span className="pull-right"><i className="fa fa-map-marker"></i> Memphis, TN</span></h4>
                        <hr />
                        <i className="fa fa-2x fa-caret-left pull-right" data-toggle="collapse" data-target="#experience-3"></i>
                        <div id="experience-3" className="collapse">
                            <h4>Responsibilities</h4>
                            <ul>
                                <li>Evaluate new tools and products for use internal and external to team</li>
                                <li>Develop automation in multiple languages (bash, vbscript, powershell, perl, php) to resolve issues</li>
                                <li>Deploy automated solutions and requested software with Configuration Management Tools</li>
                                <li>Maintain infrastructure to allow software deployment by groups such as departments</li>
                                <li>Build, maintain, and improve documentation, processes, and procedures developed by team</li>
                                <li>Support and maintain application servers for Inventory, Work Management, Antivirus, Encryption, System Monitoring, and Configuration Management</li>
                                <li>Ensure application servers and department supported applications meet security requirements</li>
                                <li>Monitor and maintain regular backups of application databases</li>
                                <li>Work with management to ensure accurate and successful SLAs</li>
                                <li>Perform Change Management for all changes that directly impact user productivity</li>
                                <li>Design ad hoc reports across all responsible data sources to ensure accuracy and consistency</li>
                            </ul>
                            <h4>Achievements</h4>
                            <ul>
                                <li>Designed and implemented automation of workflows spanning multiple groups for deployment, inventory, and work tracking of mobile devices</li>
                                <li>Regularly wrote bash and shell scripts to deploy software, gather information, and automate actions on Windows and Mac computers</li>
                                <li>Assisted in Patch Management proof of concept and deployment into production</li>
                                <li>Automated provisioning of Windows and Mac systems</li>
                                <li>Served as team expert for Mac and Linux systems automation</li>
                                <li>Migrated Symantec Management servers from 7.1 to 7.5</li>
                                <li>Tested and implemented cloud enabled communication with Configuration Management Servers</li>
                                <li>Provided and maintained access to Configuration Management Console for multiple groups within Information Sciences department</li>
                                <li>Assisted in creation of automated tasks for Support Services use against Windows and Mac systems</li>
                                <li>Performed migration of all domain attached machines from old to new structure for centralized management</li>
                                <li>Implemented Gitlab and use of Git for team internal projects</li>
                                <li>Implemented Configuration Management policies campus wide to maintain minimum versions of Antivirus, Encryption, vulnerable software, and other applications deemed necessary for normal usage</li>
                                <li>Developed and implemented automated workflow for automated provisioning of Mac and PC systems</li>
                                <li>Expanded automation workflow to wipe retired systems for automated system lifecycle management</li>
                                <li>Replaced manual generation of reports with automated solution for on demand reporting</li>
                                <li>Evaluated and implemented Computrace Absolute asset tracking system</li>
                                <li>Provided proof of concept for software installation self service portal</li>
                                <li>Assisted on documentation and training for Field Techs on tools and technology</li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="content">
                        <h3>Senior Technical Service Provider<span className="pull-right date-range"> January 2012 – June 2013</span></h3>
                        <h4>St. Jude Children's Research Hospital<span className="pull-right"><i className="fa fa-map-marker"></i> Memphis, TN</span></h4>
                        <hr />
                        <i className="fa fa-2x fa-caret-left pull-right" data-toggle="collapse" data-target="#experience-4"></i>
                        <div id="experience-4" className="collapse">
                            <h4>Responsibilities</h4>
                            <ul>
                                <li>Maintain accurate asset inventory for all computer related equipment on campus</li>
                                <li>Support and maintain application servers for Inventory, Work Management, Antivirus, Encryption, System Monitoring, and Configuration Management</li>
                                <li>Ensure appropriate patches are applied to responsible servers and applications</li>
                                <li>Monitor and maintain regular backups of application databases</li>
                                <li>Ensure all Patient Health Information and other HIPAA related details are securely wiped from all equipment before leaving campus</li>
                                <li>Ensure the accuracy and continuity of the disposition process of all Information Sciences assets</li>
                                <li>Suggest and implement process improvements within areas of responsibility</li>
                                <li>Design ad hoc reports across all responsible data sources to ensure accuracy and consistency</li>
                                <li>Evaluate vendor products for use within team or department</li>
                                <li>Assist in maintaining centralized software repository for Support Services field techs</li>
                                <li>Build, maintain, and improve documentation of processes and procedures developed</li>
                                <li>Work with management to ensure accurate and successful SLAs for individual work</li>
                            </ul>
                            <h4>Achievements</h4>
                            <ul>
                                <li>Identified lack of business continuity for Inventory Management System and implemented application and database mirroring for disaster recovery improvement</li>
                                <li>Regularly wrote bash and shell scripts to automate repetitive daily tasks</li>
                                <li>Managed multiple data sets for Client Services’ Enterprise Tools</li>
                                <li>Assisted in initial implementation and deployment of Symantec Altiris 7.1 solution</li>
                                <li>Designed and implemented Altiris software policies to enforce software Configuration Management across campus</li>
                                <li>Integrated data from previous inventory database into Altiris database</li>
                                <li>Assisted in Active Directory OU structure redesign</li>
                                <li>Designed custom web application to automate system disposals on mobile devices</li>
                                <li>Implemented Mac systems integration with Configuration Management</li>
                                <li>Redesigned and automated numerous workflows within Inventory Management system</li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="content">
                        <h3>Technical Service Provider<span className="pull-right date-range"> June 2009 – January 2012</span></h3>
                        <h4>St. Jude Children's Research Hospital<span className="pull-right"><i className="fa fa-map-marker"></i> Memphis, TN</span></h4>
                        <hr />
                        <i className="fa fa-2x fa-caret-left pull-right" data-toggle="collapse" data-target="#experience-5"></i>
                        <div id="experience-5" className="collapse">
                            <h4>Responsibilities</h4>
                            <ul>
                                <li>Assist in system image creation for desktop deployments</li>
                                <li>Maintain accurate asset inventory for all computer related equipment on campus</li>
                                <li>Support and maintain application servers for Inventory and Work Management solution used by Support Services and Information Sciences</li>
                                <li>Ensure all Patient Health Information and other HIPAA related details are securely wiped from all equipment before leaving campus</li>
                                <li>Ensure the accuracy and continuity of the disposition process of all Information Sciences assets from campus</li>
                                <li>Design ad hoc reports of inventory and other information from inventory management software</li>
                                <li>Suggest and implement process improvements within areas of responsibility</li>
                                <li>Evaluate vendor products for use within team or department</li>
                                <li>Assist in maintaining centralized software repository for Support Services field techs</li>
                                <li>Build, maintain, and improve documentation of processes and procedures developed</li>
                                <li>Work with management to ensure accurate and successful SLAs for individual work</li>
                            </ul>
                            <h4>Achievements</h4>
                            <ul>
                                <li>Performed complete rebuild and restructure of inventory and helpdesk ticket system</li>
                                <li>Performed continued maintenance and designed new additions to inventory system</li>
                                <li>Designed SQL scripts to locate and resolve anomalies within inventory database</li>
                                <li>Utilized data collected from multiple sources to analyze and update inventory for missing assets</li>
                                <li>Directly integrated inventory details from external solutions into inventory application</li>
                                <li>Designed custom mobile interface for Client Services to access tickets on mobile devices</li>
                                <li>Implemented several points of back end automation and front end layout for process work flow within inventory, ticketing, and other resource tracking</li>
                                <li>Designed and implemented structure to accommodate inventory and change control of data centers within existing inventory</li>
                                <li>Unified disposition process for data center and Client Services’ assets to ensure HIPAA compliance for both groups</li>
                                <li>Provided education and training on use of inventory and ticketing application to all of Client Services</li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="content">
                        <h3>Student Intern PC Support Specialist<span className="pull-right date-range">Nov. 2005 – June 2009</span></h3>
                        <h4>St. Jude Children's Research Hospital<span className="pull-right"><i className="fa fa-map-marker"></i> Memphis, TN</span></h4>
                        <hr />
                        <i className="fa fa-2x fa-caret-left pull-right" data-toggle="collapse" data-target="#experience-6"></i>
                        <div id="experience-6" className="collapse">
                            <h4>Responsibilities</h4>
                            <ul>
                                <li>Assist Support Service field technicians as needed</li>
                                <li>Maintain consistent and precise inventory entering and leaving Support Logistics Center for asset life cycle</li>
                                <li>Prepare new machines for deployment in the field</li>
                                <li>Assist Support Service field techs in acquiring necessary equipment for day to day maintenance and upgrades of systems</li>
                                <li>Develop documentation for process and projects as needed</li>
                                <li>Ensure all Patient Health Information and other HIPAA related details are securely wiped from all equipment before leaving campus</li>
                                <li>Ensure the accuracy and continuity of the disposition process of all Information Sciences assets from campus</li>
                            </ul>
                            <h4>Achievements</h4>
                            <ul>
                                <li>Designed and maintained Access database to track and automate portions of inventory for asset life cycle</li>
                                <li>Created custom web application to record and automate campus wide inventory</li>
                                <li>Reduced system preparation time and errors by creating scripts for segments of the provisioning process</li>
                                <li>Assisted in multiple process improvements in Support Logistics Center layout and flow</li>
                                <li>Designed and implemented paperless process for equipment disposal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    render_my_github() {
        return (
            <section className="github section">
                <div className="section-inner">
                    <h2 className="heading">My GitHub</h2>

                    <div id="github-graph" className="github-graph">
                    </div>

                    <div id="ghfeed" className="ghfeed">
                    </div>
                </div>
            </section>
        )
    }

    render_info() {
        return (
            <aside className="info aside section">
                <div className="section-inner">
                    <h2 className="heading sr-only">Basic Information</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><i className="fa fa-map-marker"></i><span className="sr-only">Location:</span>Portland, OR</li>
                            <li><i className="fa fa-envelope-o"></i><span className="sr-only">Email:</span><a href="#">daniel@danielhess.me</a></li>
                            <li><i className="fa fa-github"></i><span className="sr-only">Github:</span><a href="#">github.com/dan9186</a></li>
                            <li><i className="fa fa-twitter"></i><span className="sr-only">Twitter:</span><a href="#">@dan9186</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        )
    }

    render_eduction() {
        return (
            <section className="education aside section">
                <div className="section-inner">
                    <h2 className="heading">Education</h2>
                    <div className="content">
                        <div className="item">
                            <h3 className="title"><i className="fa fa-graduation-cap"></i> B.S. in Computer Engineering</h3>
                            <h3 className="title"><i className="fa fa-graduation-cap"></i> B.S. in Computer Science</h3>
                            <h3 className="title"><i className="fa fa-graduation-cap"></i> Minor in Mathematics</h3>
                            <h4 className="university">Christian Brothers University<br/>Memphis, TN <span className="date-range">(August 2005 – May 2009)</span></h4>
                        </div>
                        <div className="item">
                        </div>
                        <div className="item">
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    render_accomplishments() {
        return (
            <section className="section">
                <div className="section-inner">
                    <h2 className="heading">Accomplishments</h2>
                    <div className="content">
                        Eagle Scout
                    </div>
                </div>
            </section>
        )
    }

    render_community_involvement() {
        return (
            <section className="section">
                <div className="section-inner">
                    <h2 className="heading">Community Involvement</h2>
                    <div className="content">
                    </div>
                </div>
            </section>
        )
    }

    render_references() {
        return (
            <section className="section">
                <div className="section-inner">
                    <h2 className="heading">References</h2>
                    <div className="content">
                        Available upon request.
                    </div>
                </div>
            </section>
        )
    }
}
