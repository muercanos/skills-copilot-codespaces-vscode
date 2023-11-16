function skillsMember() {
    return { 
        restrict: 'E',
        tempateUrl: 'modeles/skills/view/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: { 
            member: '='
        }
    };
}