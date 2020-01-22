export const ResumeText = {
  preface:
    "I'm a motivated and self directed individual with a passion for learning anything new.  My skillset helps me to provide a fully cloud native software lifecycle, from design and development, to testing and deployment.  Strong communication skills and being very familiar with Agile software practices, I am capable of interacting and fitting into almost any team.",
  info: {
    location: 'Portland (Metropolitan Area), OR',
    email: 'daniel@danielhess.me',
    status: 'Open to offers',
    remote: 'Prefer in office/person over remote work',
  },
  accomplishments: ['Eagle Scout'],
  education: [
    {
      school: 'Christian Brothers University',
      location: 'Memphis, TN',
      start: 'August 2005',
      end: 'May 2009',
      degrees: [
        'B.S. in Computer Engineering',
        'B.S. in Computer Science',
        'Minor in Mathematics',
      ],
    },
  ],
  positions: [
    {
      title: 'Senior Software Engineer',
      company: 'Ion Channel',
      location: 'Portland, OR',
      from: 'September 2016',
      responsibilities: [
        'Write, maintain, and collaborate on JSON RPC style API for consumption by multiple clients',
        'Assist in any architectural concerns of current and new environments',
        'Work closely with both collocated and remote coworkers in the Engineering Team',
        'Share and expand knowledge of team around best practices of Golang',
        'Guide and foster juniors to produce quality work and progress their technical abilities',
      ],
      achievements: [
        'Created open source Golang SDK for interaction with API',
        'Took over as Project Manager when previous left',
        'Improved quality of tickets and workflow to the degree of being able to drop several all hands, daily meetings',
        'Provided a means of strangling a bottleneck Ruby service with a Golang version, one endpoint at a time, reducing page load times from 3 seconds to 1.6 seconds in first round',
        'Formalized and cleaned up build process for all services with simple Makefile commands',
        'Instigated and drove several changes in communications with remote team to improve team dynamics',
        'Designed multiple new services in Golang to provide good examples for less experienced team members',
      ],
      collapsed: false,
    },
    {
      title: 'Senior Software Engineer',
      company: 'Treetop Commons, LLC',
      location: 'Portland, OR',
      from: 'January 2016',
      to: 'September 2016',
      responsibilities: [
        'Write, maintain, and collaborate on RESTful API for consumption by multiple clients',
        'Expand and improve use of large graph data store built on Postgres',
        'Create and maintain documentation of API for client consumption',
        'Assist in any architectural concerns of current and new environments',
        'Serve as secondary for devops tasks to distribute knowledge and improve processes',
        'Assist in interpretation and creation of reports requested by customers',
        'Participate in Scrum and other flavors of Agile for team management',
        'Work closely with both collocated and remote coworkers in the Engineering Team',
        'Share and expand knowledge of team around best practices of Golang and automation for deployment',
      ],
      achievements: [
        'Implemented acceptance tests for the API using Cucumber',
        'Added Cucumber tests to build chain as a blocker to Pull Requests',
        'Created Dockerized setup of front end projects allowing QA to test branches prior to merges',
        'Reduced bloated Vagrant devbox from an hour long manual process to a small repeatable setup',
        'Implemented vendoring of API dependencies into the repo in place of relying on numerous checkouts from Github',
        'Provided proof of concept for a document as you code approach to API documentation',
        'Created proof of concept for Dockerized API development environment to remove the need for Vagrant devbox and allow for local development of API',
        'Drove changes in Agile process to have sprint planning, estimating, grooming, and retrospectives that were not happening previously and resulting in significant churn during a sprint',
      ],
      collapsed: false,
    },
    {
      title: 'Devops Engineer',
      company: 'Monsoon Commerce',
      location: 'Portland, OR',
      from: 'June 2014',
      to: 'Dec 2015',
      responsibilities: [
        'Maintain automation scripts and tools for Continuous Deployment',
        'Maintain TeamCity environment for Continuous Integration and Deployment',
        'Maintain AWS environments, accounts, and bill',
        'Assist in any architectural concerns of current and new environments',
        'Maintain security and sanctity of cloud environment',
        'Monitor and optimize cloud environment resources and costs',
        'Write, maintain, and collaborate with teammates on RESTful web services for high volume traffic',
        'Assist QA with writing Cucumber based Integration Tests for services',
        'Provide communication to external teams for visibility and conveying impact to customers',
        'Participate in Kanban and other flavors of Agile for team management',
        'Participate in on call schedule for bugs and infrastructure issues',
        'Share and expand knowledge of team around best practices of automation for deployments',
      ],
      achievements: [
        'Rewrote a Java microservice in Golang, increasing its speed, accuracy, efficiency, and resiliency',
        'Significantly reduced AWS bill through coding and architectural changes on multiple occasions',
        'Implemented 12 factoring of all new projects and brought out of date old projects up to speed',
        'Created interfaces and architecture for web store integration project, significantly improving development time and maintainability',
        'Rewrote several internal projects to open source none project specific sections of code',
        'Drove Go design changes to allow for better mocking and transition of Ruby written integration tests into Go',
        'Designed Makefiles for releasing and deploying services locally or via Continuous Integration system',
        'Integrated centralized key store with service integration tests for test configuration values',
        'Implemented regular backups of service databases',
        'Dockerized stating and monitoring infrastructure',
        'Dockerized various projects for easier migration and localized testing',
        'Dockerized primary storage project and immediate dependencies for localized, automated integration tests',
        'Deployed a Fleet driven environment to run Dockerized services',
        'Expanded Ansible configuration scripts to prevent destruction of existing dependencies',
        'Continued the charge of a culture of testing environment resiliency and ensuring maximum uptime as others departed',
        'Assisted in architecture and development of a Golang based strangler for a legacy Java service',
      ],
      collapsed: false,
    },
    {
      title: 'System Administrator I',
      company: "St. Jude Children's Research Hospital",
      location: 'Memphis, TN',
      from: 'June 2013',
      to: 'June 2014',
      responsibilities: [
        'Evaluate new tools and products for use internal and external to team',
        'Develop automation in multiple languages (bash, vbscript, powershell, perl, php) to resolve issues',
        'Deploy automated solutions and requested software with Configuration Management Tools',
        'Maintain infrastructure to allow software deployment by groups such as departments',
        'Build, maintain, and improve documentation, processes, and procedures developed by team',
        'Support and maintain application servers for Inventory, Work Management, Antivirus, Encryption, System Monitoring, and Configuration Management',
        'Ensure application servers and department supported applications meet security requirements',
        'Monitor and maintain regular backups of application databases',
        'Work with management to ensure accurate and successful SLAs',
        'Perform Change Management for all changes that directly impact user productivity',
        'Design ad hoc reports across all responsible data sources to ensure accuracy and consistency',
      ],
      achievements: [
        'Designed and implemented automation of workflows spanning multiple groups for deployment, inventory, and work tracking of mobile devices',
        'Regularly wrote bash and shell scripts to deploy software, gather information, and automate actions on Windows and Mac computers',
        'Assisted in Patch Management proof of concept and deployment into production',
        'Automated provisioning of Windows and Mac systems',
        'Served as team expert for Mac and Linux systems automation',
        'Migrated Symantec Management servers from 7.1 to 7.5',
        'Tested and implemented cloud enabled communication with Configuration Management Servers',
        'Provided and maintained access to Configuration Management Console for multiple groups within Information Sciences department',
        'Assisted in creation of automated tasks for Support Services use against Windows and Mac systems',
        'Performed migration of all domain attached machines from old to new structure for centralized management',
        'Implemented Gitlab and use of Git for team internal projects',
        'Implemented Configuration Management policies campus wide to maintain minimum versions of Antivirus, Encryption, vulnerable software, and other applications deemed necessary for normal usage',
        'Developed and implemented automated workflow for automated provisioning of Mac and PC systems',
        'Expanded automation workflow to wipe retired systems for automated system lifecycle management',
        'Replaced manual generation of reports with automated solution for on demand reporting',
        'Evaluated and implemented Computrace Absolute asset tracking system',
        'Provided proof of concept for software installation self service portal',
        'Assisted on documentation and training for Field Techs on tools and technology',
      ],
    },
    {
      title: 'Senior Technical Service Provider',
      company: "St. Jude Children's Research Hospital",
      location: 'Memphis, TN',
      from: 'January 2012',
      to: 'June 2013',
      responsibilities: [
        'Maintain accurate asset inventory for all computer related equipment on campus',
        'Support and maintain application servers for Inventory, Work Management, Antivirus, Encryption, System Monitoring, and Configuration Management',
        'Ensure appropriate patches are applied to responsible servers and applications',
        'Monitor and maintain regular backups of application databases',
        'Ensure all Patient Health Information and other HIPAA related details are securely wiped from all equipment before leaving campus',
        'Ensure the accuracy and continuity of the disposition process of all Information Sciences assets',
        'Suggest and implement process improvements within areas of responsibility',
        'Design ad hoc reports across all responsible data sources to ensure accuracy and consistency',
        'Evaluate vendor products for use within team or department',
        'Assist in maintaining centralized software repository for Support Services field techs',
        'Build, maintain, and improve documentation of processes and procedures developed',
        'Work with management to ensure accurate and successful SLAs for individual work',
      ],
      achievements: [
        'Identified lack of business continuity for Inventory Management System and implemented application and database mirroring for disaster recovery improvement',
        'Regularly wrote bash and shell scripts to automate repetitive daily tasks',
        'Managed multiple data sets for Client Services’ Enterprise Tools',
        'Assisted in initial implementation and deployment of Symantec Altiris 7.1 solution',
        'Designed and implemented Altiris software policies to enforce software Configuration Management across campus',
        'Integrated data from previous inventory database into Altiris database',
        'Assisted in Active Directory OU structure redesign',
        'Designed custom web application to automate system disposals on mobile devices',
        'Implemented Mac systems integration with Configuration Management',
        'Redesigned and automated numerous workflows within Inventory Management system',
      ],
    },
    {
      title: 'Technical Service Provider',
      company: "St. Jude Children's Research Hospital",
      location: 'Memphis, TN',
      from: 'June 2009',
      to: 'January 2012',
      responsibilities: [
        'Assist in system image creation for desktop deployments',
        'Maintain accurate asset inventory for all computer related equipment on campus',
        'Support and maintain application servers for Inventory and Work Management solution used by Support Services and Information Sciences',
        'Ensure all Patient Health Information and other HIPAA related details are securely wiped from all equipment before leaving campus',
        'Ensure the accuracy and continuity of the disposition process of all Information Sciences assets from campus',
        'Design ad hoc reports of inventory and other information from inventory management software',
        'Suggest and implement process improvements within areas of responsibility',
        'Evaluate vendor products for use within team or department',
        'Assist in maintaining centralized software repository for Support Services field techs',
        'Build, maintain, and improve documentation of processes and procedures developed',
        'Work with management to ensure accurate and successful SLAs for individual work',
      ],
      achievements: [
        'Performed complete rebuild and restructure of inventory and helpdesk ticket system',
        'Performed continued maintenance and designed new additions to inventory system',
        'Designed SQL scripts to locate and resolve anomalies within inventory database',
        'Utilized data collected from multiple sources to analyze and update inventory for missing assets',
        'Directly integrated inventory details from external solutions into inventory application',
        'Designed custom mobile interface for Client Services to access tickets on mobile devices',
        'Implemented several points of back end automation and front end layout for process work flow within inventory, ticketing, and other resource tracking',
        'Designed and implemented structure to accommodate inventory and change control of data centers within existing inventory',
        'Unified disposition process for data center and Client Services’ assets to ensure HIPAA compliance for both groups',
        'Provided education and training on use of inventory and ticketing application to all of Client Services',
      ],
    },
    {
      title: 'Student Intern PC Support Specialist',
      company: "St. Jude Children's Research Hospital",
      location: 'Memphis, TN',
      from: 'Nov. 2005',
      to: 'June 2009',
      responsibilities: [
        'Assist Support Service field technicians as needed',
        'Maintain consistent and precise inventory entering and leaving Support Logistics Center for asset life cycle',
        'Prepare new machines for deployment in the field',
        'Assist Support Service field techs in acquiring necessary equipment for day to day maintenance and upgrades of systems',
        'Develop documentation for process and projects as needed',
        'Ensure all Patient Health Information and other HIPAA related details are securely wiped from all equipment before leaving campus',
        'Ensure the accuracy and continuity of the disposition process of all Information Sciences assets from campus',
      ],
      achievements: [
        'Designed and maintained Access database to track and automate portions of inventory for asset life cycle',
        'Created custom web application to record and automate campus wide inventory',
        'Reduced system preparation time and errors by creating scripts for segments of the provisioning process',
        'Assisted in multiple process improvements in Support Logistics Center layout and flow',
        'Designed and implemented paperless process for equipment disposal',
      ],
    },
  ],
  skills: [
    {
      category: 'languages',
      entries: [
        { name: 'Golang', level: 3 },
        { name: 'JavaScript', level: 2 },
        { name: 'Ruby', level: 2 },
        { name: 'Java', level: 1 },
        { name: 'PHP', level: 1 },
        { name: 'Python', level: 1 },
        { name: 'Make', level: 2 },
        { name: 'SQL', level: 3 },
        { name: 'Shell Scripts', level: 3 },
        { name: 'VimL', level: 1 },
      ],
    },
    {
      category: 'frameworks',
      entries: [
        { name: 'React', level: 2 },
        { name: 'Styled Components', level: 2 },
        { name: 'Cucumber', level: 3 },
        { name: 'Gorilla Mux', level: 3 },
        { name: 'Goblin/Gomega', level: 3 },
        { name: 'Sinatra', level: 2 },
      ],
    },
    {
      category: 'systems',
      entries: [
        { name: 'CentOS', level: 3 },
        { name: 'Red Hat Enterprise Linux', level: 3 },
        { name: 'Ubuntu', level: 3 },
        { name: 'Debian', level: 3 },
        { name: 'Mac OS X', level: 3 },
        { name: 'Windows', level: 2 },
      ],
    },
    {
      category: 'infrastructure',
      entries: [
        { name: 'Amazon Web Services', level: 3 },
        { name: 'Digitial Ocean', level: 2 },
        { name: 'Google Cloud Platform', level: 3 },
        { name: 'Kubernetes', level: 2 },
        { name: 'Postgres', level: 3 },
        { name: 'RabbitMQ', level: 3 },
        { name: 'Redis', level: 2 },
        { name: 'etcd', level: 3 },
        { name: 'Logstash', level: 2 },
        { name: 'Filebeat', level: 2 },
      ],
    },
    {
      category: 'tools',
      entries: [
        { name: 'Ansible', level: 2 },
        { name: 'Chef', level: 1 },
        { name: 'CircleCI', level: 3 },
        { name: 'Docker', level: 3 },
        { name: 'Git', level: 3 },
        { name: 'Graphite/Graphana', level: 3 },
        { name: 'Jenkins', level: 2 },
        { name: 'Packer', level: 3 },
        { name: 'RVM', level: 3 },
        { name: 'TravisCI', level: 3 },
        { name: 'Vagrant', level: 3 },
        { name: 'Vim/Vi', level: 3 },
      ],
    },
  ],
  references: [],
}
