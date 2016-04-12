var bio = {

    "name": "Josua Antonius Naiborhu",
    "role": "Web Developer",
    "contacts": {
        "mobile": "081293104630",
        "email": "josua.naiborhu94@gmail.com",
        "github": "naiborhujosua.github.io",
        "twitter": "@naiborhu_josua",
        "location": "Depok"
    },

    "welcomeMessage": "Welcome to my Personal Website. Enjoy my activity",
    "skills": 
    [ 
    			"HTML", "CSS", "JavaScript", "JQuery"
    ],
    "biopic": "images/josua.jpg",
    "display": function() {
        {
            var formattedName = HTMLheaderName.replace("%data%", bio.name);

            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

            var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);

            var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);

            var FormattedmyLocation = HTMLlocation.replace("%data%",bio.contacts.location);
            var formattedinformation = formattedMobile + formattedEmail+formattedGithub + formattedTwitter +FormattedmyLocation;

            $("#header").prepend(formattedRole);
            $("#header").prepend(formattedName);
            $("#topContacts, #footerContacts").append(formattedinformation);
            


            var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
			$("#header").append(formattedbiopic);
			var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			$("#header").append(formattedMessage);

           
           if (bio.skills.length >0 ) 	{
    $("#header").append(HTMLskillsStart);
		}

		for (var i =0; i < bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
 
		}
   			

        }

    }
};
bio.display();





var education = {
    "schools": [{

        "name": " University of Indonesia",
        "location": "Depok",
        "degree": "Bachelor",
        "majors": ["Computer Enginering", "Japanesse"],
        "dates": " 2012-2016",
        "url": "www.ui.ac.id"
    }, {

        "name": " University of Sumatera Utara",
        "location": "Medan",
        "degree": "Bachelor",
        "majors": ["Information Techonology", "Mathematics"],
        "dates": " 2012-2013",
        "url": "www.usu.ac.id"
    }],
    "onlineCourses": [{
            "title": "Front End Web Developer",
            "school": "Udacity",
            "date": "2016-2017",
            "url": "Udacity.com"
        }

    ]

};

var work = {
    "jobs": [{
            "employer": "Telkomsel",
            "title": "IT Support",
            "location": "Tangerang",
            "dates": " July 2015-Sepetember 2015",
            "description": " I am joining in Division of Networking."
        }, {
            "employer": "Chemie Private",
            "title": "Math Tutor",
            "location": "Jakarta",
            "dates": "July 2012 - 2014",
            "description": "I am teaching an expatriat about math." 
        }, {
            "employer": "POUI",
            "title": "Committee",
            "location": "Depok",
            "dates": "Feb 2012 - 2015",
            "description": "Building the Character to the Lord"
        },

    ]
};



var projects = {
    "projects": [
     {
            "title": "Building a responsive Website",
            "dates": " Februari 2016-Juni 2016",
            "description": "Building a responsive website that could be" +
             "access very well in many devices",
            "images"  : ["images/responsive.png"]
            
        }

    ]


};


work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formatterdDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formatterdDates);
        var formatterdDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formatterdDescription);

    }
};


work.display();

projects.display = function() {

    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formatterdDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formatterdDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
         $(".project-entry:last").append(formattedImage);

    }
};

projects.display();

education.display = function() {
    for ( var schools in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
       	var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].majors);
        var formattedNameandDegree = formattedschoolName + formattedschoolDegree + formattedschoolDates +  formattedschoolLocation + formattedschoolMajor;
        $(".education-entry:last").append(formattedNameandDegree);
       
       
        
    }

    $("#education").append(HTMLonlineClasses);

    for (var school in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].date);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
        var formattedOnline = formattedTitle + formattedSchool + formattedDates + formattedURL;
        $(".education-entry:last").append(formattedOnline);
    }
};

education.display();
$("#mapDiv").append(googleMap);