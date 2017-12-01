export interface UIMessages {
	"id": string;
	"titlebar.tabs.home": string;
	"titlebar.tabs.homeintro": string;
	"titlebar.tabs.news": string;
	"titlebar.tabs.lastchanges": string;
	"titlebar.tabs.heroes": string;
	"titlebar.tabs.groups": string;
	"titlebar.tabs.customrules": string;
	"titlebar.tabs.wiki": string;
	"titlebar.tabs.faq": string;
	"titlebar.tabs.about": string;
	"titlebar.tabs.imprint": string;
	"titlebar.tabs.thirdpartylicenses": string;
	"titlebar.tabs.profile": string;
	"titlebar.tabs.profileoverview": string;
	"titlebar.tabs.personaldata": string;
	"titlebar.tabs.charactersheet": string;
	"titlebar.tabs.rules": string;
	"titlebar.tabs.racecultureprofession": string;
	"titlebar.tabs.race": string;
	"titlebar.tabs.culture": string;
	"titlebar.tabs.profession": string;
	"titlebar.tabs.attributes": string;
	"titlebar.tabs.advantagesdisadvantages": string;
	"titlebar.tabs.advantages": string;
	"titlebar.tabs.disadvantages": string;
	"titlebar.tabs.skills": string;
	"titlebar.tabs.talents": string;
	"titlebar.tabs.combattechniques": string;
	"titlebar.tabs.specialabilities": string;
	"titlebar.tabs.spells": string;
	"titlebar.tabs.liturgies": string;
	"titlebar.tabs.belongings": string;
	"titlebar.tabs.equipment": string;
	"titlebar.tabs.zonearmor": string;
	"titlebar.tabs.pets": string;
	"titlebar.actions.login": string;
	"titlebar.actions.logout": string;
	"titlebar.view.adventurepoints": string;
	"titlebar.adventurepoints.title": string;
	"titlebar.adventurepoints.total": string;
	"titlebar.adventurepoints.spent": string;
	"titlebar.adventurepoints.advantages": string;
	"titlebar.adventurepoints.advantagesmagic": string;
	"titlebar.adventurepoints.advantagesblessed": string;
	"titlebar.adventurepoints.disadvantages": string;
	"titlebar.adventurepoints.disadvantagesmagic": string;
	"titlebar.adventurepoints.disadvantagesblessed": string;
	"options.filtertext": string;
	"options.sortorder.alphabetically": string;
	"options.sortorder.ap": string;
	"options.sortorder.datemodified": string;
	"options.sortorder.group": string;
	"options.sortorder.improvementcost": string;
	"options.sortorder.property": string;
	"options.sortorder.aspect": string;
	"options.sortorder.location": string;
	"options.sortorder.cost": string;
	"options.showactivated": string;
	"options.none": string;
	"actions.save": string;
	"actions.done": string;
	"actions.delete": string;
	"yes": string;
	"no": string;
	"ok": string;
	"cancel": string;
	"copy": string;
	"homeintro.title": string;
	"homeintro.text": string;
	"heroes.actions.create": string;
	"heroes.actions.import": string;
	"heroes.options.filter.all": string;
	"heroes.options.filter.own": string;
	"heroes.options.filter.shared": string;
	"heroes.view.unsavedhero.title": string;
	"heroes.warnings.unsavedactions.title": string;
	"heroes.warnings.unsavedactions.text": string;
	"heroes.warnings.delete.title": string;
	"heroes.warnings.delete.message": string;
	"herocreation.title": string;
	"herocreation.actions.start": string;
	"herocreation.options.nameofhero": string;
	"herocreation.options.selectsex": string;
	"herocreation.options.selectsex.male": string;
	"herocreation.options.selectsex.female": string;
	"herocreation.options.selectexperiencelevel": string;
	"wiki.category.magic": string;
	"wiki.category.spells": string;
	"wiki.category.rituals": string;
	"wiki.category.cantrips": string;
	"wiki.category.curses": string;
	"wiki.category.elvenmagicalsongs": string;
	"wiki.category.magicalmelodies": string | undefined;
	"wiki.category.magicaldances": string | undefined;
	"imprint.title": string;
	"imprint.emailhint": string;
	"profileoverview.view.male": string;
	"profileoverview.view.female": string;
	"profileoverview.view.editprofessionname": string;
	"profileoverview.view.personaldata": string;
	"profileoverview.view.advantages": string;
	"profileoverview.view.disadvantages": string;
	"profileoverview.actions.addadventurepoints": string;
	"profileoverview.actions.endherocreation": string;
	"addadventurepoints.title": string;
	"addadventurepoints.actions.add": string;
	"addadventurepoints.actions.cancel": string;
	"addadventurepoints.options.adventurepoints": string;
	"changeheroavatar.title": string;
	"changeheroavatar.actions.change": string;
	"changeheroavatar.options.selectfile": string;
	"changeheroavatar.warnings.invalidfile": string;
	"personaldata.family": string;
	"personaldata.placeofbirth": string;
	"personaldata.dateofbirth": string;
	"personaldata.age": string;
	"personaldata.haircolor": string;
	"personaldata.eyecolor": string;
	"personaldata.size": string;
	"personaldata.weight": string;
	"personaldata.title": string;
	"personaldata.socialstatus": string;
	"personaldata.characteristics": string;
	"personaldata.otherinfo": string;
	"personaldata.cultureareaknowledge": string;
	"socialstatus": string[];
	"haircolors": string[];
	"eyecolors": string[];
	"settings.title": string;
	"settings.options.language": string;
	"settings.options.defaultlanguage": string;
	"settings.options.languagehint": string;
	"settings.options.theme": string;
	"settings.options.themedark": string;
	"settings.options.themelight": string;
	"settings.actions.close": string;
	"charactersheet.title": string;
	"charactersheet.actions.printtopdf": string;
	"charactersheet.options.showattributevalues": string;
	"charactersheet.main.title": string;
	"charactersheet.main.heroname": string;
	"charactersheet.main.race": string;
	"charactersheet.main.culture": string;
	"charactersheet.main.profession": string;
	"charactersheet.main.family": string;
	"charactersheet.main.placeofbirth": string;
	"charactersheet.main.dateofbirth": string;
	"charactersheet.main.sex": string;
	"charactersheet.main.age": string;
	"charactersheet.main.haircolor": string;
	"charactersheet.main.eyecolor": string;
	"charactersheet.main.size": string;
	"charactersheet.main.weight": string;
	"charactersheet.main.herotitle": string;
	"charactersheet.main.socialstatus": string;
	"charactersheet.main.characteristics": string;
	"charactersheet.main.otherinfo": string;
	"charactersheet.main.experiencelevel": string;
	"charactersheet.main.totalap": string;
	"charactersheet.main.apcollected": string;
	"charactersheet.main.apspent": string;
	"charactersheet.main.avatar": string;
	"charactersheet.main.advantages": string;
	"charactersheet.main.disadvantages": string;
	"charactersheet.main.generalspecialabilites": string;
	"charactersheet.main.generalspecialabilites.areaknowledge": string;
	"charactersheet.main.fatepoints": string;
	"charactersheet.main.headers.value": string;
	"charactersheet.main.headers.bonuspenalty": string;
	"charactersheet.main.headers.bonus": string;
	"charactersheet.main.headers.bought": string;
	"charactersheet.main.headers.max": string;
	"charactersheet.main.headers.current": string;
	"charactersheet.main.subheaders.basestat": string;
	"charactersheet.main.subheaders.permanent": string;
	"charactersheet.gamestats.title": string;
	"charactersheet.gamestats.skills.title": string;
	"charactersheet.gamestats.skills.headers.skill": string;
	"charactersheet.gamestats.skills.headers.check": string;
	"charactersheet.gamestats.skills.headers.enc": string;
	"charactersheet.gamestats.skills.headers.ic": string;
	"charactersheet.gamestats.skills.headers.sr": string;
	"charactersheet.gamestats.skills.headers.r": string;
	"charactersheet.gamestats.skills.headers.notes": string;
	"charactersheet.gamestats.skills.enc.yes": string;
	"charactersheet.gamestats.skills.enc.no": string;
	"charactersheet.gamestats.skills.enc.maybe": string;
	"charactersheet.gamestats.skills.subheaders.physical": string;
	"charactersheet.gamestats.skills.subheaders.physicalpages": string;
	"charactersheet.gamestats.skills.subheaders.social": string;
	"charactersheet.gamestats.skills.subheaders.socialpages": string;
	"charactersheet.gamestats.skills.subheaders.nature": string;
	"charactersheet.gamestats.skills.subheaders.naturepages": string;
	"charactersheet.gamestats.skills.subheaders.knowledge": string;
	"charactersheet.gamestats.skills.subheaders.knowledgepages": string;
	"charactersheet.gamestats.skills.subheaders.craft": string;
	"charactersheet.gamestats.skills.subheaders.craftpages": string;
	"charactersheet.gamestats.languages.title": string;
	"charactersheet.gamestats.languages.native": string;
	"charactersheet.gamestats.knownscripts.title": string;
	"charactersheet.gamestats.routinechecks.title": string;
	"charactersheet.gamestats.routinechecks.texts.first": string;
	"charactersheet.gamestats.routinechecks.texts.second": string;
	"charactersheet.gamestats.routinechecks.texts.third": string;
	"charactersheet.gamestats.routinechecks.texts.fourth": string;
	"charactersheet.gamestats.routinechecks.headers.checkmod": string;
	"charactersheet.gamestats.routinechecks.headers.neededsr": string;
	"charactersheet.gamestats.routinechecks.from": string;
	"charactersheet.gamestats.qualitylevels.title": string;
	"charactersheet.gamestats.qualitylevels.headers.skillpoints": string;
	"charactersheet.gamestats.qualitylevels.headers.qualitylevel": string;
	"charactersheet.attributemodifiers.title": string;
	"charactersheet.combat.title": string;
	"charactersheet.combat.combattechniques.title": string;
	"charactersheet.combat.combattechniques.headers.name": string;
	"charactersheet.combat.combattechniques.headers.primaryattribute": string;
	"charactersheet.combat.combattechniques.headers.ic": string;
	"charactersheet.combat.combattechniques.headers.ctr": string;
	"charactersheet.combat.combattechniques.headers.atrc": string;
	"charactersheet.combat.combattechniques.headers.pa": string;
	"charactersheet.combat.lifepoints.title": string;
	"charactersheet.combat.lifepoints.labels.max": string;
	"charactersheet.combat.lifepoints.labels.current": string;
	"charactersheet.combat.lifepoints.labels.pain1": string;
	"charactersheet.combat.lifepoints.labels.pain2": string;
	"charactersheet.combat.lifepoints.labels.pain3": string;
	"charactersheet.combat.lifepoints.labels.pain4": string;
	"charactersheet.combat.lifepoints.labels.dying": string;
	"charactersheet.combat.closecombatweapons.title": string;
	"charactersheet.combat.headers.weapon": string;
	"charactersheet.combat.headers.combattechnique": string;
	"charactersheet.combat.headers.damagebonus": string;
	"charactersheet.combat.headers.dp": string;
	"charactersheet.combat.headers.atpamod": string;
	"charactersheet.combat.headers.reach": string;
	"charactersheet.combat.headers.reachlabels": string[],
	"charactersheet.combat.headers.bf": string,
	"charactersheet.combat.headers.loss": string,
	"charactersheet.combat.headers.at": string;
	"charactersheet.combat.headers.pa": string;
	"charactersheet.combat.headers.weight": string;
	"charactersheet.combat.headers.weightunit": string;
	"charactersheet.combat.rangedcombatweapons.title": string;
	"charactersheet.combat.headers.reloadtime": string;
	"charactersheet.combat.headers.rangebrackets": string;
	"charactersheet.combat.headers.rangedcombat": string;
	"charactersheet.combat.headers.ammunition": string;
	"charactersheet.combat.armor.title": string;
	"charactersheet.combat.headers.armor": string;
	"charactersheet.combat.headers.st": string;
	"charactersheet.combat.headers.pro": string;
	"charactersheet.combat.headers.enc": string;
	"charactersheet.combat.headers.addpenalties": string;
	"charactersheet.combat.headers.where": string;
	"charactersheet.combat.headers.head": string;
	"charactersheet.combat.headers.torso": string;
	"charactersheet.combat.headers.leftarm": string;
	"charactersheet.combat.headers.rightarm": string;
	"charactersheet.combat.headers.leftleg": string;
	"charactersheet.combat.headers.rightleg": string;
	"charactersheet.combat.shieldparryingweapon.title": string;
	"charactersheet.combat.headers.shieldparryingweapon": string;
	"charactersheet.combat.headers.structurepoints": string;
	"charactersheet.combat.content.dice": string;
	"charactersheet.combat.content.actions": string;
	"charactersheet.combat.combatspecialabilities.title": string;
	"charactersheet.combat.conditionsstates.conditions": string;
	"charactersheet.combat.conditionsstates.conditions.animosity": string;
	"charactersheet.combat.conditionsstates.conditions.encumbrance": string;
	"charactersheet.combat.conditionsstates.conditions.intoxicated": string;
	"charactersheet.combat.conditionsstates.conditions.stupor": string;
	"charactersheet.combat.conditionsstates.conditions.rapture": string;
	"charactersheet.combat.conditionsstates.conditions.fear": string;
	"charactersheet.combat.conditionsstates.conditions.paralysis": string;
	"charactersheet.combat.conditionsstates.conditions.pain": string;
	"charactersheet.combat.conditionsstates.conditions.confusion": string;
	"charactersheet.combat.conditionsstates.states": string;
	"charactersheet.combat.conditionsstates.states.immobilized": string;
	"charactersheet.combat.conditionsstates.states.unconscious": string;
	"charactersheet.combat.conditionsstates.states.blind": string;
	"charactersheet.combat.conditionsstates.states.bloodlust": string;
	"charactersheet.combat.conditionsstates.states.burning": string;
	"charactersheet.combat.conditionsstates.states.cramped": string;
	"charactersheet.combat.conditionsstates.states.bound": string;
	"charactersheet.combat.conditionsstates.states.incapacitated": string;
	"charactersheet.combat.conditionsstates.states.diseased": string;
	"charactersheet.combat.conditionsstates.states.prone": string;
	"charactersheet.combat.conditionsstates.states.misfortune": string;
	"charactersheet.combat.conditionsstates.states.rage": string;
	"charactersheet.combat.conditionsstates.states.mute": string;
	"charactersheet.combat.conditionsstates.states.deaf": string;
	"charactersheet.combat.conditionsstates.states.surprised": string;
	"charactersheet.combat.conditionsstates.states.badsmell": string;
	"charactersheet.combat.conditionsstates.states.invisible": string;
	"charactersheet.combat.conditionsstates.states.poisoned": string;
	"charactersheet.combat.conditionsstates.states.petrified": string;
	"charactersheet.belongings.title": string;
	"charactersheet.belongings.equipment.title": string;
	"charactersheet.belongings.equipment.headers.item": string;
	"charactersheet.belongings.equipment.headers.number": string;
	"charactersheet.belongings.equipment.headers.price": string;
	"charactersheet.belongings.equipment.headers.weight": string;
	"charactersheet.belongings.equipment.headers.carriedwhere": string;
	"charactersheet.belongings.equipment.footers.total": string;
	"charactersheet.belongings.purse.title": string;
	"charactersheet.belongings.purse.labels.ducats": string;
	"charactersheet.belongings.purse.labels.silverthalers": string;
	"charactersheet.belongings.purse.labels.halers": string;
	"charactersheet.belongings.purse.labels.kreutzers": string;
	"charactersheet.belongings.purse.labels.gems": string;
	"charactersheet.belongings.purse.labels.jewelry": string;
	"charactersheet.belongings.purse.labels.other": string;
	"charactersheet.belongings.carryingcapacity.title": string;
	"charactersheet.belongings.carryingcapacity.calc": string;
	"charactersheet.belongings.carryingcapacity.label": string;
	"charactersheet.belongings.animal.title": string;
	"charactersheet.spells.title": string;
	"charactersheet.spells.headers.aemax": string;
	"charactersheet.spells.headers.aecurrent": string;
	"charactersheet.spells.spellslist.title": string;
	"charactersheet.spells.spellslist.headers.spellritual": string;
	"charactersheet.spells.spellslist.headers.check": string;
	"charactersheet.spells.spellslist.headers.sr": string;
	"charactersheet.spells.spellslist.headers.cost": string;
	"charactersheet.spells.spellslist.headers.castingtime": string;
	"charactersheet.spells.spellslist.headers.range": string;
	"charactersheet.spells.spellslist.headers.duration": string;
	"charactersheet.spells.spellslist.headers.property": string;
	"charactersheet.spells.spellslist.headers.ic": string;
	"charactersheet.spells.spellslist.headers.effect": string;
	"charactersheet.spells.spellslist.headers.page": string;
	"charactersheet.spells.traditionsproperties.labels.primaryattribute": string;
	"charactersheet.spells.traditionsproperties.labels.properties": string;
	"charactersheet.spells.traditionsproperties.labels.tradition": string;
	"charactersheet.spells.magicalspecialabilities.title": string;
	"charactersheet.spells.cantrips.title": string;
	"charactersheet.chants.title": string;
	"charactersheet.chants.headers.kpmax": string;
	"charactersheet.chants.headers.kpcurrent": string;
	"charactersheet.chants.chantslist.title": string;
	"charactersheet.chants.chantslist.headers.liturgyceremony": string;
	"charactersheet.chants.chantslist.headers.check": string;
	"charactersheet.chants.chantslist.headers.sr": string;
	"charactersheet.chants.chantslist.headers.cost": string;
	"charactersheet.chants.chantslist.headers.castingtime": string;
	"charactersheet.chants.chantslist.headers.range": string;
	"charactersheet.chants.chantslist.headers.duration": string;
	"charactersheet.chants.chantslist.headers.property": string;
	"charactersheet.chants.chantslist.headers.ic": string;
	"charactersheet.chants.chantslist.headers.effect": string;
	"charactersheet.chants.chantslist.headers.page": string;
	"charactersheet.chants.traditionsaspects.labels.primaryattribute": string;
	"charactersheet.chants.traditionsaspects.labels.aspects": string;
	"charactersheet.chants.traditionsaspects.labels.tradition": string;
	"charactersheet.chants.blessedspecialabilities.title": string;
	"charactersheet.chants.blessings.title": string;
	"rules.rulebase": string;
	"rules.optionalrules": string;
	"rules.optionalrules.maximumattributescores": string;
	"rules.optionalrules.higherdefensestats": string;
	"secondaryattributes.lp.name": string;
	"secondaryattributes.lp.short": string;
	"secondaryattributes.lp.calc": string;
	"secondaryattributes.ae.name": string;
	"secondaryattributes.ae.short": string;
	"secondaryattributes.ae.calc": string;
	"secondaryattributes.kp.name": string;
	"secondaryattributes.kp.short": string;
	"secondaryattributes.kp.calc": string;
	"secondaryattributes.spi.name": string;
	"secondaryattributes.spi.short": string;
	"secondaryattributes.spi.calc": string;
	"secondaryattributes.tou.name": string;
	"secondaryattributes.tou.short": string;
	"secondaryattributes.tou.calc": string;
	"secondaryattributes.do.name": string;
	"secondaryattributes.do.short": string;
	"secondaryattributes.do.calc": string;
	"secondaryattributes.ini.name": string;
	"secondaryattributes.ini.short": string;
	"secondaryattributes.ini.calc": string;
	"secondaryattributes.mov.name": string;
	"secondaryattributes.mov.short": string;
	"secondaryattributes.mov.calc": string;
	"secondaryattributes.ws.name": string;
	"secondaryattributes.ws.short": string;
	"secondaryattributes.ws.calc": string;
	"permanentpoints.boughtback": string;
	"permanentpoints.spent": string;
	"rcp.actions.select": string;
	"rcp.actions.next": string;
	"races.options.showvalues": string;
	"aptext": string;
	"apshort": string;
	"info.apvalue": string;
	"info.lifepointbasevalue": string;
	"info.spiritbasevalue": string;
	"info.toughnessbasevalue": string;
	"info.movementbasevalue": string;
	"info.attributeadjustments": string;
	"info.commoncultures": string;
	"info.automaticadvantages": string;
	"info.stronglyrecommendedadvantages": string;
	"info.stronglyrecommendeddisadvantages": string;
	"info.commonadvantages": string;
	"info.commondisadvantages": string;
	"info.uncommonadvantages": string;
	"info.uncommondisadvantages": string;
	"info.none": string;
	"cultures.options.allcultures": string;
	"cultures.options.commoncultures": string;
	"cultures.options.showculturalpackagevalues": string;
	"info.language": string;
	"info.or": string;
	"info.script": string;
	"info.areaknowledge": string;
	"info.socialstatus": string;
	"info.commonprofessions": string;
	"info.commonmundaneprofessions": string;
	"info.commonmagicprofessions": string;
	"info.commonblessedprofessions": string;
	"info.commonskills": string;
	"info.uncommonskills": string;
	"info.commonnames": string;
	"info.culturalpackage": string;
	"professions.options.allprofessions": string;
	"professions.options.commonprofessions": string;
	"professions.options.allprofessiongroups": string;
	"professions.options.mundaneprofessions": string;
	"professions.options.magicalprofessions": string;
	"professions.options.blessedprofessions": string;
	"professions.options.alwaysshowprofessionsfromextensions": string;
	"professions.options.novariant": string;
	"professions.ownprofession": string;
	"info.prerequisites": string;
	"info.specialabilities": string;
	"info.specialabilitieslanguagesandliteracy": string;
	"info.specialabilitiesspecialization": string;
	"info.specialabilitiesspecializationseparator": string;
	"info.specialabilitiescurses": string;
	"info.combattechniques": string;
	"info.combattechniquesselection": string;
	"info.combattechniquesselectioncounter": string[];
	"info.combattechniquessecondselection": string;
	"info.skills": string;
	"info.skillsselection": string;
	"info.spells": string;
	"info.spellscantrips": string;
	"info.spellscantripscounter": string[];
	"info.liturgicalchants": string;
	"info.liturgicalchantsthetwelveblessings": string;
	"info.suggestedadvantages": string;
	"info.suggesteddisadvantages": string;
	"info.unsuitableadvantages": string;
	"info.unsuitabledisadvantages": string;
	"info.variants": string;
	"info.variantsinsteadof": string;
	"rcpselections.labels.selectattributeadjustment": string;
	"rcpselections.labels.buyculturalpackage": string;
	"rcpselections.labels.selectnativetongue": string;
	"rcpselections.labels.buyscript": string;
	"rcpselections.labels.selectscript": string;
	"rcpselections.labels.onecantrip": string;
	"rcpselections.labels.twocantrips": string;
	"rcpselections.labels.fromthefollowinglist": string;
	"rcpselections.labels.one": string;
	"rcpselections.labels.two": string;
	"rcpselections.labels.more": string;
	"rcpselections.labels.ofthefollowingcombattechniques": string;
	"rcpselections.labels.curses": string;
	"rcpselections.labels.languagesandliteracytotaling": string;
	"rcpselections.labels.left": string;
	"rcpselections.labels.applicationforskillspecialization": string;
	"rcpselections.labels.skillapplicationseparator": string;
	"rcpselections.labels.skillgroups": string[];
	"rcpselections.labels.skills": string;
	"rcpselections.actions.complete": string;
	"attributes.view.attributetotal": string;
	"attributes.tooltips.modifier": string;
	"attributes.tooltips.bought": string;
	"attributes.tooltips.losttotal": string;
	"attributes.tooltips.boughtback": string;
	"plp.short": string;
	"plp.long": string;
	"attributes.pae.name": string;
	"attributes.pae.short": string;
	"attributes.pkp.name": string;
	"attributes.pkp.short": string;
	"advantages.options.common": string;
	"disadvantages.options.common": string;
	"activatable.view.afraidof": string;
	"activatable.view.immunityto": string;
	"activatable.view.hatredof": string;
	"info.rules": string;
	"info.extendedcombatspecialabilities": string;
	"info.penalty": string;
	"info.tier": string;
	"info.pertier": string;
	"info.volume": string;
	"info.bindingcost": string;
	"info.protectivecircle": string;
	"info.wardingcircle": string;
	"info.actions": string;
	"customcost.title": string;
	"customcost.message": string;
	"skills.options.commoninculture": string;
	"skills.view.groups": string[];
	"info.check": string;
	"info.applications": string;
	"info.encumbrance": string;
	"info.tools": string;
	"info.quality": string;
	"info.failedcheck": string;
	"info.criticalsuccess": string;
	"info.botch": string;
	"info.improvementcost": string;
	"view.commoninculture": string;
	"view.uncommoninculture": string;
	"combattechniques.view.groups": string[];
	"info.special": string;
	"actions.addtolist": string;
	"specialabilities.view.groups": string[];
	"info.specialabilities.subgroups": string[];
	"spells.view.groups": string[];
	"spells.view.cantrip": string;
	"spells.view.properties": string[];
	"spells.view.traditions": string[];
	"info.effect": string;
	"info.castingtime": string;
	"info.ritualtime": string;
	"info.aecost": string;
	"info.range": string;
	"info.duration": string;
	"info.targetcategory": string;
	"info.property": string;
	"info.traditions": string;
	"info.note": string;
	"info.lengthoftime": string;
	"info.skill": string;
	"info.musictradition": string;
	"liturgies.view.groups": string[];
	"liturgies.view.blessing": string;
	"liturgies.view.aspects": string[];
	"liturgies.view.traditions": string[];
	"info.liturgicaltime": string;
	"info.ceremonialtime": string;
	"info.kpcost": string;
	"info.aspect": string;
	"equipment.actions.create": string;
	"equipment.view.purse": string;
	"equipment.view.ducates": string;
	"equipment.view.silverthalers": string;
	"equipment.view.hellers": string;
	"equipment.view.kreutzers": string;
	"equipment.view.initialstartingwealth": string;
	"equipment.view.carringandliftingcapactity": string;
	"equipment.view.price": string;
	"equipment.view.weight": string;
	"equipment.view.groups": string[];
	"equipment.view.armortypes": string[];
	"equipment.view.dice": string[];
	"equipment.view.list.ammunitionsubtitle": string;
	"equipment.view.list.weight": string;
	"equipment.view.list.weightunit": string;
	"equipment.view.list.price": string;
	"equipment.view.list.priceunit": string;
	"equipment.view.list.combattechnique": string;
	"equipment.view.list.damage": string;
	"equipment.view.list.dice": string;
	"equipment.view.list.primaryattributedamagethreshold": string;
	"equipment.view.list.atpamod": string;
	"equipment.view.list.reach": string;
	"equipment.view.list.reachlabels": string[];
	"equipment.view.list.length": string;
	"equipment.view.list.lengthunit": string;
	"equipment.view.list.reloadtime": string;
	"equipment.view.list.reloadtimeunit": string;
	"equipment.view.list.range": string;
	"equipment.view.list.ammunition": string;
	"equipment.view.list.pro": string;
	"equipment.view.list.enc": string;
	"equipment.view.list.additionalpenalties": string;
	"itemeditor.titleedit": string;
	"itemeditor.titlecreate": string;
	"itemeditor.options.number": string;
	"itemeditor.options.name": string;
	"itemeditor.options.price": string;
	"itemeditor.options.weight": string;
	"itemeditor.options.carriedwhere": string;
	"itemeditor.options.gr": string;
	"itemeditor.options.grhint": string;
	"itemeditor.options.improvisedweapon": string;
	"itemeditor.options.improvisedweapongr": string;
	"itemeditor.options.template": string;
	"itemeditor.options.combattechnique": string;
	"itemeditor.options.primaryattribute": string;
	"itemeditor.options.primaryattributeshort": string;
	"itemeditor.options.damagethreshold": string;
	"itemeditor.options.damagethresholdseparated": string;
	"itemeditor.options.damage": string;
	"itemeditor.options.damagedice": string;
	"itemeditor.options.bfmod": string;
	"itemeditor.options.weaponloss": string;
	"itemeditor.options.reach": string;
	"itemeditor.options.reachshort": string;
	"itemeditor.options.reachmedium": string;
	"itemeditor.options.reachlong": string;
	"itemeditor.options.atpamod": string;
	"itemeditor.options.structurepoints": string;
	"itemeditor.options.length": string;
	"itemeditor.options.parryingweapon": string;
	"itemeditor.options.twohandedweapon": string;
	"itemeditor.options.reloadtime": string;
	"itemeditor.options.rangeclose": string;
	"itemeditor.options.rangemedium": string;
	"itemeditor.options.rangefar": string;
	"itemeditor.options.ammunition": string;
	"itemeditor.options.pro": string;
	"itemeditor.options.enc": string;
	"itemeditor.options.armortype": string;
	"itemeditor.options.stabilitymod": string;
	"itemeditor.options.armorloss": string;
	"itemeditor.options.zonesonly": string;
	"itemeditor.options.movmod": string;
	"itemeditor.options.inimod": string;
	"itemeditor.options.additionalpenalties": string;
	"zonearmor.actions.create": string;
	"zonearmoreditor.titleedit": string;
	"zonearmoreditor.titlecreate": string;
	"zonearmoreditor.options.name": string;
	"zonearmoreditor.options.loss": string;
	"zonearmoreditor.options.head": string;
	"zonearmoreditor.options.torso": string;
	"zonearmoreditor.options.leftarm": string;
	"zonearmoreditor.options.rightarm": string;
	"zonearmoreditor.options.leftleg": string;
	"zonearmoreditor.options.rightleg": string;
	"pet.name": string;
	"pet.sizecategory": string;
	"pet.type": string;
	"pet.apspent": string;
	"pet.totalap": string;
	"pet.cou": string;
	"pet.sgc": string;
	"pet.int": string;
	"pet.cha": string;
	"pet.dex": string;
	"pet.agi": string;
	"pet.con": string;
	"pet.str": string;
	"pet.ap": string;
	"pet.lp": string;
	"pet.ae": string;
	"pet.spi": string;
	"pet.tou": string;
	"pet.pro": string;
	"pet.ini": string;
	"pet.mov": string;
	"pet.attack": string;
	"pet.at": string;
	"pet.pa": string;
	"pet.dp": string;
	"pet.reach": string;
	"pet.reachshort": string;
	"pet.reachmedium": string;
	"pet.reachlong": string;
	"pet.actions": string;
	"pet.skills": string;
	"pet.specialabilities": string;
	"pet.notes": string;
	"avatarchange.title": string;
	"avatarchange.actions.selectfile": string;
	"avatarchange.actions.change": string;
	"avatarchange.dialog.image": string;
	"avatarchange.view.invalidfile": string;
	"fileapi.error.title": string;
	"fileapi.error.message.code": string;
	"fileapi.error.message.loadtables": string;
	"fileapi.error.message.loadl10ns": string;
	"fileapi.error.message.saveconfig": string;
	"fileapi.error.message.saveheroes": string;
	"fileapi.exporthero.title": string;
	"fileapi.exporthero.success": string;
	"fileapi.error.message.exporthero": string;
	"fileapi.printcharactersheettopdf.title": string;
	"fileapi.printcharactersheettopdf.success": string;
	"fileapi.error.message.printcharactersheettopdf": string;
	"fileapi.error.message.printcharactersheettopdfpreparation": string;
	"fileapi.error.message.importhero": string;
	"fileapi.allsaved": string;
	"fileapi.everythingelsesaved": string;
	"emptylist": string;
	"musictraditions": string[];
	"dancetraditions": string[];
	"notenoughap.title": string;
	"notenoughap.content": string;
	"reachedaplimit.title": string;
	"reachedaplimit.content": string;
	"reachedaplimit.advantages": string;
	"reachedaplimit.disadvantages": string;
	"reachedcategoryaplimit.title": string;
	"reachedcategoryaplimit.content": string;
	"reachedcategoryaplimit.magicaladvantages": string;
	"reachedcategoryaplimit.blessedadvantages": string;
	"reachedcategoryaplimit.magicaldisadvantages": string;
	"reachedcategoryaplimit.blesseddisadvantages": string;
	"modal.actions.add": string;
	"modal.actions.remove": string;
	"modal.actions.cancel": string;
	"removepermanentenergypoints.title": string;
	"removepermanentenergypoints.inputhint": string;
	"name": string;
	"group": string;
	"sr.short": string;
	"sr.long": string;
	"check": string;
	"ic.short": string;
	"ic.long": string;
	"ctr.short": string;
	"ctr.long": string;
	"primaryattribute.short": string;
	"primaryattribute.long": string;
	"at.short": string;
	"at.long": string;
	"pa.short": string;
	"pa.long": string;
	"aspect": string;
	"mod.short": string;
	"mod.long": string;
	"property": string;
	"unfamiliartraditions": string;
	"spellextensions": string;
	"liturgicalchantextensions": string;
	"enableeditingheroaftercreationphase": string;
	"allcombattechniques": string;
	"newversionavailable.title": string;
	"newversionavailable.message": string;
	"newversionavailable.update": string;
	"downloadupdate": string;
	"mothertongue.short": string;
	"attributeadjustmentselection": string;
	"mac.aboutapp": string;
	"mac.preferences": string;
	"mac.quit": string;
	"edit": string;
	"view": string;
	"rules.enableallrulebooks": string;
}
