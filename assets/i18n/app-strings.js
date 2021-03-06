appCivistApp.config(function ($translateProvider) {
    //English strings
    $translateProvider.translations('en', {

        // Landing Page Strings
        "landing.tagline": "AppCivist is a platform for democratic assembly and collective action.",
        "landing.Learn more": "How it works",
        "landing.goal": "AppCivist lets users design and build their own Assemblies with modular components to organize democratic action.",
        "landing.goal.assembly": "CREATE OR JOIN AN ASSEMBLY",
        "landing.goal.campaign": "CREATE A CAMPAIGN",
        "landing.goal.proposal": "SUBMIT AND EVALUATE PROPOSALS",
        "landing.section2.button": "AppCivist for Participatory Budgeting",
        "landing.section3.title" : "The Participatory Budgeting Campaign",
        //"landing.section3.desc" : "AppCivist is designed to support assemblies in a bottom-up process of collaborative development and selection of proposals. This process is ideal for participatory budgeting campaigns and it consists of the following four main stages, each with its distinctive milestones.",


        //
        "landing.section3.desc1" : "AppCivist provides a framework for the collaborative development and selection of proposals. ",
        "landing.section3.desc2" : "It consists of the following four stages, each with distinctive milestones.",
        "landing.section3.desc3" : "Campaigns can be linked to each other at various stages, allowing assemblies of different kinds to collaborate.",
        "landing.component.Proposal Making" : "PROPOSAL MAKING",
        "landing.component.Proposal Making.Brainstorming" : "Brainstorming",
        "landing.component.Proposal Making.Forming working groups" : "Forming working groups",
        "landing.component.Proposal Making.Drafting proposals" : "Drafting proposals",
        "landing.component.Versioning" : "VERSIONING",
        "landing.component.Versioning.Proposal editing" : "Proposal editing",
        "landing.component.Versioning.Proposal merging/splitting" : "Proposal merging/splitting",
        "landing.component.Versioning.Proposal selection within groups" : "Proposal selection within groups",
        "landing.component.Deliberation" : "DELIBERATION",
        "landing.component.Deliberation.Open discussion" : "Assembly discussion and evaluation",
        "landing.component.Deliberation.Technical assessment" : "Technical assessment",
        "landing.component.Voting" : "VOTING",
        "landing.component.Voting.Final selection" : "Final selection of proposals",
        "landing.section3.button": "Other features",
        "landing.section4.title": "Customizable tools for democratic action",

        // Header and Footer Strings
        "header.sign_in": "Log In",
        "header.sign_up": "Sign Up",
        "header.sign_up_group": "Group Sign Up",
        "header.sign_up_individual": "Individual Sign Up",
        "header.sign_out": "Sign Out",
        "header.Forgot password": "Forgot Password?",
        "footer.text": "Created by the <a href='http://socialappslab.org/'>Social Apps Lab</a> at CITRIS, University of California, Berkeley.<br/> 2014-2017 &copy; Regents of the University of California <br/> In partnership with the <a href='https://mimove.inria.fr/'>MiMove Team</a> at <a href='http://www.inria.fr/'>INRIA</a>, France.",
        "footer.text.dev": "[DEV] Change Backend Server: Currently Using ",

        // User Menus
        "header.menu.Send message": "Send message",
        "header.menu.Profile": "Profile",
        "header.menu.Settings": "Settings",
        "header.menu.Notification": "Notification",
        "header.menu.Notifications": "Notifications",

        // AppCivist Common Strings
        "appcivist": "AppCivist",
        "Home" : "Home",
        "Assembly": "Assembly",
        "Assemblies": "Assemblies",
        "Campaign": "Campaign",
        "Campaigns": "Campaigns",
        "WorkingGroup": "Working Group",
        "WorkingGroups": "Working Groups",
        "WorkingGroupDefinition": "Working groups develop campaigns by taking speCciofincsaeicltBioenllesv,islleuch as drafting proposals and organizing events.",
        "Contribution": "Contribution",
        "Contributions": "Contributions",
        "Proposal": "Proposal",
        "Proposals": "Proposals",
        "ProposalDraft": "Proposal Draft",
        "ProposalDrafts": "Proposal Drafts",
        "Idea": "Idea",
        "Ideas": "Ideas",

        // Other common strings
        "Email" : "Email",
        "Open" : "Open",
        "Registration" : "Registration",
        "Membership by registration" : "Membership by registration",
        "By invitation" : "By invitation",
        "and" : "and",
        "or" : "or",
        "and/or" : "and/or",
        "By request" : "By request",
        "Moderator" : "Moderator",
        "Moderators" : "Moderators",
        "Coordinator" : "Coordinator",
        "Coordinators" : "Coordinators",
        "Create" : "Create",
        "Read" : "Read",
        "Update" : "Update",
        "Delete" : "Delete",

        // Common creation questions/phrases
        "How do people become members?" : "How do people become members?",
        "Who will be able to change settings and remove inappropriate comments?" : "Who will be able to change settings and remove inappropriate comments?",
        "Nominate specific moderators (at least two)" : "Nominate specific moderators (at least two)",
        "Nominate specific coordinators (at least two)" : " Nominate specific coordinators (at least two)",
        "Make all assembly members moderators" : "Make all assembly members moderators",
        "Make all assembly members coordinators" : "Make all assembly members moderators",
        "Make all group members moderators" : "Make all group members moderators",
        "Make all group members coordinators" : "Make all group members moderators",
        "Have no moderators" : "Have no moderators",
        "Have no coordinators" : "Have no moderators",
        "Invite people to join" : "Invite people to join",
        "Invalid email(s)" : "Invalid email(s)",
        "Invitation Email" : "Invitation Email",
        "wgroup.invitation.email.text" : "Hello! You have been invited to be a member of the Working Group {{group}} in AppCivist. If you are interested, follow the link attached to this invitation to accept it. If you are not interested, you can just ignore this message",
        "assembly.invitation.email.text" : "Hello! You have been invited to be a member of the Assembly {{assembly}} in AppCivist. If you are interested, follow the link attached to this invitation to accept it. If you are not interested, you can just ignore this message",
        "invitation.email.text.part1" : "Hello! You have been invited to be a member of the Working Group ",
        "invitation.email.text.part" : "in AppCivist. If you are interested, follow the link attached to this invitation to accept it. If you are not interested, you can just ignore this message",
        "Majority threshold" : "Majority threshold",
        "Simple" : "Simple",
        "Enable blocking" : "Enable blocking",
        "Do you want your Assembly to be listed?" : "Do you want your Assembly to be listed?",
        "Do you want your Working Group to be listed?" : "Do you want your Working Group to be listed?",

        // Definitions
        "definition.assembly":"Assemblies are groups of people with shared concerns, like neighborhood safety or city budgets, who want to organize to take action.",
        "definition.campaign":"Campaigns are initiatives that an assembly undertakes to achieve a specific goal. Each campaign has its own template that structures its components, working groups, and timeline.",
        "definition.proposal.development":"Assembly members organize into Working Groups to brainstorm, develop, and select proposals democratically for collective action.",

        // Help Strings
        "help.proposalTimeline" : "Click on the stage name to activate or deactivate the phases you wish to include in your campaign. Stages shown as disabled take place in the linked campaign.",

        // Help Tooltips
        "help.tooltip.location" : "Can be the name of a specific place, address, city or country associated with your assembly",
        "help.tooltip.targetAudience" : "Describe who you want to participate",
        "help.tooltip.supportedMembershipRegistration" : "Members can be invited or request to join the assembly, or both.",
        "help.tooltip.moderators" : "Moderators are assembly members empowered to delete inappropriate content. AppCivist recommends that assemblies have at least two. An alternative is to allow all members to be moderators. In both cases at least two moderators must agree.",
        "help.tooltip.coordinators" : "Coordinators are assembly members empowered to change settings",
        "help.tooltip.invitations" : "Add one or more email addresses of people you want to invite, separated by comma, then click add to list",
        "help.tooltip.invitationsEmail" : "Each invitee will receive the following email",
        "help.tooltip.listedAssembly" : "If true, the 'profile' of the assembly will be searchable and public",
        "help.tooltip.campaignTemplate" : "The campaign template determines an initial configuration of the proposal development components. Linking to another campaign will bring that campaign's configuration",
        "help.tooltip.campaignFastrack" : "Fastrack uses default values for each stage of a campaign (e.g., default dates and duration, default configuration values)",
        "help.tooltip.campaignTimeframe" : "Select a period of time to represent in the timeline below.",
        "help.tooltip.componentContributionTemplate": "A proposal template is the list of sections (with its descriptions) that are used to initialized proposal drafts",


        // Working Group Pages Strings
        "Working groups" : "Working Group",
        "Create Working Group" : "Create Working Group",
        "wgroups.purpose" : "develop campaigns by taking specific actions, such as drafting proposals and organizing events",
        "wgroups.name.example" : "e.g., Urban Infrastucture Interest Group",
        "wgroups.text.example" : "(Max. 250 words) e.g., Group developing Urban Infrastucture proposals for Parc de Belleville",
        "wgroups.select.campaign.themes" : "Select one or more Campaign Themes for the group",
        "wgroups.select.icon" : "Pick an icon or upload an image to represent your Group"
    });

    //French strings
    $translateProvider.translations('fr', {
    });

    //Spanish strings
    $translateProvider.translations('es', {
    });

    $translateProvider.preferredLanguage('en');
});
