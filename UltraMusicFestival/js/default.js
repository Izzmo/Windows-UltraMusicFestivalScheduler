(function () {
  'use strict';

  var app = WinJS.Application;
  var activation = Windows.ApplicationModel.Activation;

  app.onactivated = function (args) {
    if (args.detail.kind === activation.ActivationKind.launch) {
      if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
        // TODO: This application has been newly launched. Initialize your application here.
      } else {
        // TODO: This application was suspended and then terminated.
        // To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
      }

      if(args.detail.prelaunchActivated) return;

      args.setPromise(WinJS.UI.processAll());
    }
  };

  app.oncheckpoint = function (args) {
    // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
    // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
    // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
  };


  var artists = [
    // Headliners
    new Artist(224, 'Above & Beyond', '/images/artists/aboveandbeyond.jpg', '', '', '', false), //2017
    new Artist(225, 'Adam Beyer', '/images/artists/adambeyer-2017.jpg', '', '', '', false), //2017
    new Artist(1, 'Afrojack', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist(2, 'Armin Van Buuren', '/images/artists/ArminvanBuuren-update.jpg', '', '', '', true),
    new Artist(343, 'Axwell X Ingrosso', '/images/artists/axwellingrosso-2017.jpg', '', '', '', false), //2017
    // new Artist(3, 'Avicii', '/images/artists/avicii-2016.jpg', '', '', '', true),
    // new Artist(4, 'Caribou', '/images/artists/caribou.jpg', '', '', '', true),
    new Artist(5, 'Carl Cox', '/images/artists/carlcox-update.jpg', '', '', '', true),
    new Artist(217, 'Chase and Status', '/images/artists/chaseandstatus-2017.jpg', '', '', '', false), //2017
    new Artist(218, 'Cypress Hill', '/images/artists/cypresshill-1.jpg', '', '', '', false), //2017
    // new Artist(6, 'Chet Faker', '/images/artists/chetfaker.jpg', '', '', '', true),
    // new Artist(77, 'Crystal Castles', '/images/artists/crystalcastles-temp.jpg', '', '', '', true),
    new Artist(76, 'Dash Berlin', '/images/artists/DashBerlin.jpg', '', '', '', true),
    new Artist(7, 'David Guetta', '/images/artists/davidguetta-2016.jpg', '', '', '', true),
    new Artist(26, 'DJ Snake', '/images/artists/djsnake-2.jpg', '', '', '', true),
    // new Artist(75, 'deadmau5', '/images/artists/deadmau5_main.jpg', '', '', '', true),
    // new Artist(8, 'Destroid', '/images/artists/destroid.jpg', '', '', '', true),
    new Artist(9, 'Dubfire', '/images/artists/dubfire.jpg', '', '', '', true),
    // new Artist(10, 'Eric Prydz', '/images/artists/ericprydz-update.jpg', '', '', '', true),
    new Artist(11, 'Hardwell', '/images/artists/Hardwell.jpg', '', '', '', true),
    new Artist(219, 'Ice Cube', '/images/artists/icecube.jpg', '', '', '', false), //2017
    new Artist(12, 'Jamie Jones', '/images/artists/jamiejones-2.jpg', '', '', '', true),
    new Artist(220, 'Justice', '/images/artists/justice.jpg', '', '', '', false), //2017
    // new Artist(13, 'Kaskade', '/images/artists/kaskade.jpg', '', '', '', true),
    // new Artist(14, 'Knife Party', '/images/artists/KnifeParty.jpg', '', '', '', true),
    new Artist(15, 'Kygo', '/images/artists/Kygo.jpg', '', '', '', true),
    // new Artist(16, 'Loco Dice', '/images/artists/locodice-update.jpg', '', '', '', true),
    new Artist(74, 'Maceo Plex', '/images/artists/maceo-plex.jpg', '', '', '', true),
    new Artist(221, 'Major Lazer', '/images/artists/majorlazer.jpg', '', '', '', false), //201
    new Artist(17, 'Marco Carola', '/images/artists/marcocarola-update.jpg', '', '', '', true),
    new Artist(18, 'Martin Garrix', '/images/artists/martingarrix-2.jpg', '', '', '', true),
    // new Artist(19, 'Miike Snow', '/images/artists/miikesnow.jpg', '', '', '', true),
    // new Artist(20, 'Nero', '/images/artists/nero-ph.jpg', '', '', '', true),
    // new Artist(21, 'Pendulum', '/images/artists/pendulum-placeholder.jpg', '', '', '', true),
    new Artist(22, 'The Prodigy', '/images/artists/theprodigy.jpg', '', '', '', true),
    // new Artist(23, 'Purity Ring', '/images/artists/purityring.jpg', '', '', '', true),
    new Artist(24, 'Rabbit on the Moon', '/images/artists/ritm-performance.jpg', '', '', '', true),
    // new Artist(73, 'Richie Hawtin', '/images/artists/richiehawtin.jpg', '', '', '', true),
    new Artist(226, 'Sasha & John Digweed', '/images/artists/sashadigweed.jpg', '', '', '', false), //2017
    new Artist(227, 'Steve Aoki', '/images/artists/steveaoki.jpg', '', '', '', false), //2017
    new Artist(228, 'Tale of Us', '/images/artists/taleofus.jpg', '', '', '', false), //20177
    new Artist(222, 'Underworld', '/images/artists/underworld.jpg', '', '', '', false), //2017
    new Artist(25, 'Seth Troxler', '/images/artists/sethtroxler.jpg', '', '', '', true),
    // new Artist(72, 'Steve Angello', '/images/artists/steveangello.jpg', '', '', '', true),
    new Artist(27, 'Tiesto', '/images/artists/Tiesto.jpg', '', '', '', true),
    // new Artist(28, 'Tycho', '/images/artists/tycho.jpg', '', '', '', true),
    new Artist(29, 'Zedd', '/images/artists/zedd.jpg', '', '', '', true),
    new Artist(223, 'ZHU', '/images/artists/zhu.jpg', '', '', '', false), //2017

    // new Artist(30, 'AlunaGeorge', '/images/artists/alunageorge-update.jpg', '', '', '', false),
    // new Artist(31, 'Alison Wonderland', '/images/artists/alisonwonderland.jpg', '', '', '', false),
    new Artist(72, 'Aly & Fila', '/images/artists/alyfija.jpg', '', '', '', false),
    // new Artist(32, 'andhim', '/images/artists/andhim.jpg', '', '', '', false),
    new Artist(33, 'Andrew Rayel', '/images/artists/andrewrayel-update.jpg', '', '', '', false),
    // new Artist(34, 'Apollonia', '/images/artists/Apollonia-update.jpg', '', '', '', false),
    // new Artist(35, 'Art Department', '/images/artists/artdepartment-2.jpg', '', '', '', false),
    new Artist(78, 'Bass Jackers', '/images/artists/bassjackers-temp.jpg', '', '', '', false),
    new Artist(79, 'Black Coffee', '/images/artists/blackcoffee.jpg', '', '', '', false),
    // new Artist(80, 'BlasterJaxx', '/images/artists/blasterjaxx.jpg', '', '', '', false),
    // new Artist(81, 'Bob Moses', '/images/artists/bobmoses.jpg', '', '', '', false),
    // new Artist(82, 'Borgeous', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(83, 'Brillz', '/images/artists/brillz.jpg', '', '', '', false),
    // new Artist(36, 'Carnage', '/images/artists/Carnage.jpg', '', '', '', false),
    new Artist(84, 'Cedric Gervais', '/images/artists/cedricgervais.jpg', '', '', '', false),
    // new Artist(37, 'The Chainsmokers', '/images/artists/thechainsmokers.jpg', '', '', '', false),
    // new Artist(85, 'Dannic', '/images/artists/dannic.jpg', '', '', '', false),
    new Artist(86, 'Don Diablo', '/images/artists/dondiablo-2017.jpg', '', '', '', false),
    // new Artist(38, 'Duke Dumont', '/images/artists/dukedumont.jpg', '', '', '', false),
    // new Artist(39, 'DVBBS', '/images/artists/dvbbs.jpg', '', '', '', false),
    // new Artist(40, 'Fakear', '/images/artists/fakear-ph.jpg', '', '', '', false),
    new Artist(41, 'Fedde le Grand', '/images/artists/feddelegrand-2017.jpg', '', '', '', false),
    // new Artist(87, 'Felix Jaehn', '/images/artists/felixjaehn.jpg', '', '', '', false),
    new Artist(42, 'Galantis', '/images/artists/galantis-2016.jpg', '', '', '', false),
    new Artist(88, 'Getter', '/images/artists/getter-2017.jpg', '', '', '', false),
    new Artist(89, 'Gryffin', '/images/artists/gryffin-1.jpg', '', '', '', false),
    // new Artist(43, 'Guy Gerber', '/images/artists/guygerber-3.jpg', '', '', '', false),
    new Artist(44, 'Hot Since 82', '/images/artists/hotsince82-update.jpg', '', '', '', false),
    // new Artist(45, 'Icona Pop', '/images/artists/iconapop.jpg', '', '', '', false),
    new Artist(46, 'Jackmaster', '/images/artists/jackmaster.jpg', '', '', '', false),
    // new Artist(47, 'Jauz', '/images/artists/jauz-ph.jpg', '', '', '', false),
    // new Artist(90, 'John Digweed', '/images/artists/johndigweed.jpg', '', '', '', false),
    // new Artist(48, 'Joris Voorn', '/images/artists/jorisvoorn-update.jpg', '', '', '', false),
    new Artist(49, 'Joseph Capriati', '/images/artists/josephcapriati-2016.jpg', '', '', '', false),
    // new Artist(92, 'KiNK', '/images/artists/kink.jpg', '', '', '', false),
    new Artist(50, 'KSHMR', '/images/artists/kshmr.jpg', '', '', '', false),
    new Artist(51, 'Laidback Luke', '/images/artists/LaidbackLuke.jpg', '', '', '', false),
    // new Artist(52, 'Lee Foss', '/images/artists/leefoss.jpg', '', '', '', false),
    // new Artist(93, 'LOUDPVCK', '/images/artists/loudpvck.jpg', '', '', '', false),
    // new Artist(94, 'MAKJ', '/images/artists/makj.jpg', '', '', '', false),
    new Artist(95, 'MALAA', '/images/artists/malaa-1.jpg', '', '', '', false),
    // new Artist(96, 'Marco Bailey', '/images/artists/marcobailey.jpg', '', '', '', false),
    // new Artist(97, 'Markus Schulz', '/images/artists/markusschulz.jpg', '', '', '', false),
    // new Artist(53, 'Marshmello', '/images/artists/marshmello-2.jpg', '', '', '', false),
    new Artist(54, 'The Martinez Brothers', '/images/artists/themartinezbrothers-2017.jpg', '', '', '', false),
    // new Artist(55, 'Mind Against', '/images/artists/mindagainst-2.jpg', '', '', '', false),
    // new Artist(56, 'MK', '/images/artists/mk-update.jpg', '', '', '', false),
    // new Artist(98, 'Morten', '/images/artists/morten.jpg', '', '', '', false),
    new Artist(57, 'Nic Fanciulli', '/images/artists/nicfanciulli-2016.jpg', '', '', '', false),
    // new Artist(99, 'Nicole Moudaber', '/images/artists/nicolemoudaber.jpg', '', '', '', false),
    // new Artist(100, 'Ookay', '/images/artists/ookay.jpg', '', '', '', false),
    new Artist(58, 'Party Favor', '/images/artists/partyfavor.jpg', '', '', '', false),
    new Artist(59, 'Patrick Topping', '/images/artists/patricktopping.jpg', '', '', '', false),
    // new Artist(101, 'Peaches', '/images/artists/peaches.jpg', '', '', '', false),
    new Artist(60, 'Robin Schulz', '/images/artists/robinschulz.jpg', '', '', '', false),
    new Artist(61, 'Sam Feldt', '/images/artists/samfeldt-1.jpg', '', '', '', false),
    // new Artist(105, 'Sasha', '/images/artists/sasha.jpg', '', '', '', false),
    // new Artist(104, 'Skream', '/images/artists/skream-placeholder.jpg', '', '', '', false),
    new Artist(62, 'Slander', '/images/artists/slander.jpg', '', '', '', false),
    // new Artist(63, 'Snails', '/images/artists/snails.jpg', '', '', '', false),
    // new Artist(64, 'SNBRN', '/images/artists/snbrn-ph.jpg', '', '', '', false),
    new Artist(65, 'Tchami', '/images/artists/tchami-2.jpg', '', '', '', false),
    new Artist(66, 'Technasia', '/images/artists/technasia.jpg', '', '', '', false),
    // new Artist(67, 'Thugfucker', '/images/artists/thugfucker-2.jpg', '', '', '', false),
    // new Artist(68, 'Thomas Jack', '/images/artists/thomasjack.jpg', '', '', '', false),
    new Artist(103, 'Valentino Khan', '/images/artists/valentinokhan.jpg', '', '', '', false),
    // new Artist(102, 'DJ Vice', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(69, 'Vicetone', '/images/artists/Vicetone.jpg', '', '', '', false),
    new Artist(70, 'W&W', '/images/artists/ww-update.jpg', '', '', '', false),
    // new Artist(91, 'Wave Racer', '/images/artists/waveracer.jpg', '', '', '', false),
    // new Artist(71, 'Yellow Claw', '/images/artists/yellowclaw.jpg', '', '', '', false),
    
    // new Artist(106, 'Julian Jordan', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(107, 'Vintage Culture', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(108, 'Alok', '/images/artists/alok.jpg', '', '', '', false),
    // new Artist(109, 'Dyro', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(110, 'Tommie Sunshine', '/images/artists/tommiesunshine.jpg', '', '', '', false),
    new Artist(111, 'Mykris', '/images/artists/mykris.jpg', '', '', '', false),
    // new Artist(112, 'Michael Calfan', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(113, 'Afrobeta', '/images/artists/afrobeta-play-house-credit-Daniel-Sannwald.jpg', '', '', '', false),
    new Artist(114, 'Lexz Pryde', '/images/artists/lexzpryde.jpg', '', '', '', false),
    new Artist(115, 'Jon Rundell', '/images/artists/jonrundell.jpg', '', '', '', false),
    // new Artist(116, 'Khomha', '/images/artists/khomha.jpg', '', '', '', false),
    // new Artist(117, 'Ben Gold', '/images/artists/bengold.jpg', '', '', '', false),
    // new Artist(118, 'Marlo', '/images/artists/marlo.jpg', '', '', '', false),
    // new Artist(119, 'The Roaches', '/images/artists/theroaches.jpg', '', '', '', false),
    new Artist(120, 'Arcadia Landing Show', '/images/artists/arcadia-spider-app.jpg', '', '', '', false),
    // new Artist(121, 'Camilo Franco', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(122, 'Monika Kruse', '/images/artists/monika.jpg', '', '', '', false),
    new Artist(123, 'Elio Riso', '/images/artists/elioriso.jpg', '', '', '', false),
    // new Artist(124, 'Harvard Bass', '/images/artists/harvardbass.jpg', '', '', '', false),
    new Artist(125, 'Justin Oh', '/images/artists/저스틴오1280X700.jpg', '', '', '', false),
    new Artist(126, 'Raiden', '/images/artists/레이든1280X700.jpg', '', '', '', false),
    new Artist(127, 'TJO', '/images/artists/TJO1280X700.jpg', '', '', '', false),
    new Artist(128, 'Ksuke', '/images/artists/Ksuke1280X700.jpg', '', '', '', false),
    // new Artist(129, 'Sigala', '/images/artists/sigala.jpg', '', '', '', false),
    new Artist(130, 'Mercer', '/images/artists/mercer.jpg', '', '', '', false),
    // new Artist(131, 'Anevo', '/images/artists/anevo.jpg', '', '', '', false),
    // new Artist(132, 'Unlike Pluto', '/images/artists/unlikepluto.jpg', '', '', '', false),
    // new Artist(133, 'Domeno', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(134, 'Merk & Kremont', '/images/artists/merkandkremont-temp.jpg', '', '', '', false),
    // new Artist(135, 'Paris Blohm', '/images/artists/parisblohm.jpg', '', '', '', false),
    // new Artist(136, 'Tom Swoon', '/images/artists/tomswoon.jpg', '', '', '', false),
    // new Artist(137, 'Sick Individuals', '/images/artists/sickindividuals.jpg', '', '', '', false),
    // new Artist(138, 'Josh Pan', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(139, 'Aryay', '/images/artists/aryay.jpg', '', '', '', false),
    // new Artist(140, 'Louis The Child', '/images/artists/louisthechild.jpg', '', '', '', false),
    // new Artist(141, 'Autoerotique B2B Hunter Siegel', '/images/artists/autoerotique.jpg', '', '', '', false),
    new Artist(142, 'Vindata', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(143, 'Mija', '/images/artists/mija.jpg', '', '', '', false),
    // new Artist(144, 'AC Slater B2B Chris Lorenzo', '/images/artists/acslater.jpg', '', '', '', false),
    new Artist(145, 'DJ Sliink', '/images/artists/djsliink.jpg', '', '', '', false),
    // new Artist(146, 'Bad Royale', '/images/artists/badroyale.jpg', '', '', '', false),
    // new Artist(147, 'TWRK', '/images/artists/twrk.jpg', '', '', '', false),
    // new Artist(148, 'Danny L Harle', '/images/artists/dannylharle-temp.jpg', '', '', '', false),
    // new Artist(149, 'San Holo', '/images/artists/p1sanholo.jpg', '', '', '', false),
    // new Artist(150, 'ETC! ETC!', '/images/artists/etcetc.jpg', '', '', '', false),
    // new Artist(151, 'gLadiator', '/images/artists/gladiator-temp.jpg', '', '', '', false),
    new Artist(152, 'Lookas', '/images/artists/lookas.jpg', '', '', '', false),
    // new Artist(153, 'Crizzly', '/images/artists/crizzly.jpg', '', '', '', false),
    new Artist(154, 'OWSLA ALL STARS', '/images/artists/OWSLA.jpg', '', '', '', false),
    // new Artist(155, 'Thomas Newson', '/images/artists/Thomas-Newson.jpeg', '', '', '', false),
    new Artist(156, 'Wiwek', '/images/artists/wiwek.jpg', '', '', '', false),
    
    // new Artist(157, 'Andres Fresko', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(158, 'G Buck', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(159, 'Riggi & Piros', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(160, '4B', '/images/artists/4b.jpg', '', '', '', false),
    new Artist(161, 'DJ Icey', '/images/artists/djicey-2017.jpg', '', '', '', false),
    // new Artist(162, 'Jackal', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(163, 'Botnek', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(164, 'Alvin Risk', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(165, 'SMLE', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(166, 'Tommy Walker', '/images/artists/tommywalker.jpg', '', '', '', false),
    // new Artist(167, 'Nick Talos', '/images/artists/nicktalos.jpg', '', '', '', false),
    // new Artist(168, 'Ranidu', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(169, 'Adam Trigger', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(170, 'Rod B B2B Bob B', '/images/artists/rodb.jpg', '', '', '', false),
    new Artist(171, 'Rodrigo Vieira', '/images/artists/ua-rodrigo_vieira-for_site.jpg', '', '', '', false),
    // new Artist(172, 'Infuze', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(173, 'Kennedy Jones', '/images/artists/kennedyjones.jpg', '', '', '', false),
    new Artist(174, 'Diego Miranda', '/images/artists/diegomiranda.jpg', '', '', '', false),
    new Artist(175, 'DJ Nano', '/images/artists/djnano.jpg', '', '', '', false),
    new Artist(177, 'Josefine Rosen', '/images/artists/josefinrosen.jpg', '', '', '', false),
    new Artist(178, 'Casey Kiss', '/images/artists/caseykiss-2017.jpg', '', '', '', false),
    // new Artist(179, 'Maxum', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(180, 'Travis Emmons', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(181, 'Kandy', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(182, 'Los De La Vega', '/images/artists/losdelavega.jpg', '', '', '', false),
    new Artist(183, 'Antz', '/images/artists/antz.jpg', '', '', '', false),
    new Artist(184, 'RioTGeaR', '/images/artists/riotgear.jpg', '', '', '', false),
    new Artist(185, 'DJ Fresh', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(186, 'DJ Samtrakk', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(187, 'Kryoman', '/images/artists/kryoman.jpg', '', '', '', false),
    new Artist(188, 'Meta Forza', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(189, 'DJ K9', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(190, 'Lemony Snickettes', '/images/artists/lemonysnickettes.jpg', '', '', '', false),
    new Artist(191, 'Teezy', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(192, 'Proxxy B2B Lantern', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(193, 'Jimmie Page', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(194, 'Damaged Goods', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(195, 'Twincitiez', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(196, 'Axion Fuentes', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(197, 'Richard Fraioli', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(198, 'Metaphysical', '/images/artists/metaphysical.jpg', '', '', '', false),
    // new Artist(199, 'Ideal & JBreak', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(200, 'Soul Goodman', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(201, 'Ya Boy TEV', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(202, 'Atellagali', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(203, 'Bass Control', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(204, 'Alyx Ander', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(205, 'GROMO', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(206, 'Takshak', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(207, 'DJ Shalomar', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(208, 'Point Blank Range', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(209, 'WYZZARD', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(210, 'Jason Daniel', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(211, 'Dabura', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(212, 'Drianu / Keyrose', '/images/artists/drianu.jpg', '', '', '', false),
    new Artist(213, 'WAGS', '/images/artists/wags1280X700.jpg', '', '', '', false),
    // new Artist(214, 'Unk\'l Funk\'l', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(215, 'Rex', '/images/artists/placeholder.jpg', '', '', '', false),
    // new Artist(216, 'Adrian Hardy', '/images/artists/placeholder.jpg', '', '', '', false),

    // Support 2017
    new Artist(229, 'Adventure Club', '/images/artists/adventureclub.jpg', '', '', '', false),
    new Artist(230, 'Alan Walker', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(241, 'Alpha 9', '/images/artists/alpha9.jpg', '', '', '', false),
    new Artist(242, 'AK1200', '/images/artists/ak1200.jpg', '', '', '', false),
    new Artist(243, 'Albert Neve', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(244, 'Alesso', '/images/artists/alesso-2017.jpg', '', '', '', false),
    new Artist(245, 'ANNA', '/images/artists/anna.jpg', '', '', '', false),
    new Artist(246, 'Ape Drums', '/images/artists/apedrums.jpg', '', '', '', false),
    new Artist(247, 'Apster', '/images/artists/apster.jpg', '', '', '', false),
    new Artist(248, 'B.Traits', '/images/artists/btraits.jpg', '', '', '', false),
    new Artist(249, 'Bag Raiders', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(250, 'Barclay Crenshaw', '/images/artists/barclaycrenshaw.jpg', '', '', '', false),
    new Artist(251, 'Beardsace', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(252, 'Ben Spence', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(253, 'Blaise James', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(255, 'Bobby Burns', '/images/artists/bobbyburns.jpg', '', '', '', false),
    new Artist(256, 'Boombox Cartel', '/images/artists/boomboxcartel.jpg', '', '', '', false),
    new Artist(257, 'BT', '/images/artists/bt.jpg', '', '', '', false),
    new Artist(258, 'Chris Lake', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(259, 'Chris Liebing', '/images/artists/chrisliebing.jpg', '', '', '', false),
    new Artist(260, 'Chistopher James', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(261, 'Christoph', '/images/artists/cristoph.jpg', '', '', '', false),
    new Artist(262, 'D.O.D', '/images/artists/dod.jpg', '', '', '', false),
    new Artist(263, 'D-wayne', '/images/artists/dwayne.jpg', '', '', '', false),
    new Artist(264, 'Datsik', '/images/artists/datsik-1.jpg', '', '', '', false),
    new Artist(265, 'David Gravell', '/images/artists/DavidGravell.jpg', '', '', '', false),
    new Artist(266, 'DJ Cosmo', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(267, 'DJ Redline', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(268, 'Tandim', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(269, 'DJ Trace', '/images/artists/trace.jpg', '', '', '', false),
    new Artist(270, 'Dosem', '/images/artists/dosem-2017.jpg', '', '', '', false),
    new Artist(271, 'Eats Everything', '/images/artists/eatseverything.jpg', '', '', '', false),
    new Artist(272, 'Eli & Fur', '/images/artists/eliandfur.jpg', '', '', '', false),
    new Artist(273, 'Elio Riso', '/images/artists/elioriso-2017.jpg', '', '', '', false),
    new Artist(274, 'Ella Romand', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(275, 'Esrever', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(276, 'Euphonik', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(277, 'Feed Me', '/images/artists/feedme-new.png', '', '', '', false),
    new Artist(278, 'Frank Walker', '/images/artists/frankwalker.jpg', '', '', '', false),
    new Artist(279, 'GG Magree', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(280, 'Goldfish', '/images/artists/goldfish.jpg', '', '', '', false),
    new Artist(281, 'Ferry Corsten Presents Gouryella', '/images/artists/gouryella.jpg', '', '', '', false),
    new Artist(282, 'Grandtheft', '/images/artists/grandtheft.jpg', '', '', '', false),
    new Artist(283, 'Green Lantern', '/images/artists/greenlantern.jpg', '', '', '', false),
    new Artist(284, 'GTA', '/images/artists/gta-new.jpg', '', '', '', false),
    new Artist(285, 'Hector', '/images/artists/hector.jpg', '', '', '', false),
    new Artist(286, 'Henri PFR', '/images/artists/henripfr.jpg', '', '', '', false),
    new Artist(287, 'Holsem', '/images/artists/holsem.jpg', '', '', '', false),
    new Artist(289, 'IDeaL', '/images/artists/ideal.jpg', '', '', '', false),
    new Artist(290, 'Special Guests', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(291, 'Jai Wolf', '/images/artists/jaiwolf.jpg', '', '', '', false),
    new Artist(292, 'Jean Marie', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(293, 'Joyryde', '/images/artists/joyryde.jpg', '', '', '', false),
    new Artist(294, 'Juan Basshead', '/images/artists/juanbasshead.jpg', '', '', '', false),
    new Artist(295, 'Juno', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(296, 'K1K0', '/images/artists/k1ko.jpg', '', '', '', false),
    new Artist(297, 'Keith MacKenzie', '/images/artists/keithmackenzie.jpg', '', '', '', false),
    new Artist(298, 'Kolsch', '/images/artists/kolsch-2017.jpg', '', '', '', false),
    new Artist(299, 'Kungs', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(300, 'Linus', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(301, 'Logan Dakota', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(302, 'Mad Decent All Stars', '/images/artists/mad-decent.jpg', '', '', '', false),
    new Artist(303, 'Magic Mike', '/images/artists/magicmike.jpg', '', '', '', false),
    new Artist(304, 'Marta Sanchez', '/images/artists/martasanchez.jpg', '', '', '', false),
    new Artist(305, 'Martin Solveig', '/images/artists/martinsolveig.jpg', '', '', '', false),
    new Artist(306, 'Matador', '/images/artists/matador.jpg', '', '', '', false),
    new Artist(307, 'Matthias Tanzmann', '/images/artists/matthiastanzmann.jpg', '', '', '', false),
    new Artist(308, 'Maya Jane Coles', '/images/artists/mayajanecoles.jpg', '', '', '', false),
    new Artist(309, 'Merlyn', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(310, 'Moonspeak', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(311, 'MOST', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(312, 'Nadya', '/images/artists/nadya.jpg', '', '', '', false),
    new Artist(313, 'Nala', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(314, 'Nate Campbell', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(315, 'Nathan Barato', '/images/artists/nathanbarato.png', '', '', '', false),
    new Artist(316, 'Netsky', '/images/artists/netsky.jpg', '', '', '', false),
    new Artist(317, 'NGHTMRE', '/images/artists/nghtmre.jpg', '', '', '', false),
    new Artist(318, 'Nicky Romero', '/images/artists/nickyromero.jpg', '', '', '', false),
    new Artist(319, 'NWYR', '/images/artists/nwyr-ph.jpg', '', '', '', false),
    new Artist(320, 'Oliver Rosa', '/images/artists/oliverrosa.jpg', '', '', '', false),
    new Artist(321, 'Quintino', '/images/artists/quintino.jpg', '', '', '', false),
    new Artist(322, 'Ravitez', '/images/artists/ravitez.jpg', '', '', '', false),
    new Artist(323, 'Reboot', '/images/artists/reboot.jpg', '', '', '', false),
    new Artist(324, 'Rezz', '/images/artists/rezz.jpg', '', '', '', false),
    new Artist(325, 'Ricky Remedy', '/images/artists/rickyremedy.jpg', '', '', '', false),
    new Artist(327, 'Sander Van Doorn', '/images/artists/svdphaze3-1.png', '', '', '', false),
    new Artist(328, 'ShoTime', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(329, 'Showtek', '/images/artists/showtek.jpg', '', '', '', false),
    new Artist(330, 'SID from Slipknot', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(331, 'Slushii', '/images/artists/slushii.jpg', '', '', '', false),
    new Artist(332, 'Sophie Francis', '/images/artists/sophiefrancis-1.jpg', '', '', '', false),
    new Artist(333, 'Stephan Bodzin', '/images/artists/stephanbodzin.jpg', '', '', '', false),
    new Artist(334, 'Sunnery James & Ryan Marciano', '/images/artists/sunneryjamesryanmarciano.jpg', '', '', '', false),
    new Artist(335, 'Supernaut', '/images/artists/supernaut.jpg', '', '', '', false),
    new Artist(336, 'Swanky Tunes', '/images/artists/swankytunes.jpg', '', '', '', false),
    new Artist(337, 'Team EZY', '/images/artists/teamezy1.png', '', '', '', false),
    new Artist(338, 'Ty Dolla $ign', '/images/artists/tydollasign.jpg', '', '', '', false),
    new Artist(339, 'Vini Vici', '/images/artists/ua-vini_vici-for_site.jpg', '', '', '', false),
    new Artist(340, 'wAFF', '/images/artists/waff.jpg', '', '', '', false),
    new Artist(341, 'Youngr', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(342, 'ZAA', '/images/artists/zaa.jpg', '', '', '', false),
    new Artist(344, 'A$AP FERG', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(345, 'Saeed Younan', '/images/artists/saeedyounan-2017.jpg', '', '', '', false),
    new Artist(346, 'Ruben De Ronde', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(346, 'Marcel Dettmann', '/images/artists/marceldettmann.jpg', '', '', '', false),
    new Artist(347, 'Bro Safari', '/images/artists/brosafari.jpg', '', '', '', false),
    new Artist(348, 'Sander Kleinenberg', '/images/artists/sanderkleinenberg.jpg', '', '', '', false),
    new Artist(349, 'X-CON', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(350, 'Kiko', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(351, 'Roman Nicolai', '/images/artists/placeholder.jpg', '', '', '', false)
  ];
  var stages = [
    new Stage(1, 'Main Stage', null),
    new Stage(2, 'Live Stage', null),
    new Stage(3, 'Carl Cox MegaStructure', null),
    new Stage(4, 'Resistance', null),
    //new Stage(5, 'A State of Trance', null),
    new Stage(6, 'Ultra Worldwide', null),
    new Stage(7, 'UMF Radio', null),
    //new Stage(8, 'Stage7', null),
    new Stage(9, 'Oasis', null),
    new Stage(10, 'Biscayne', null)
  ];
  var artistStageMap = [
    { artistId: 126, stageId: 1, day: 1, time: '400', duration: 15 },
    { artistId: 86, stageId: 1, day: 1, time: '415', duration: 60 },
    { artistId: 60, stageId: 1, day: 1, time: '520', duration: 60 },
    { artistId: 65, stageId: 1, day: 1, time: '625', duration: 60 },
    { artistId: 2, stageId: 1, day: 1, time: '730', duration: 60 },
    { artistId: 244, stageId: 1, day: 1, time: '835', duration: 75 },
    { artistId: 18, stageId: 1, day: 1, time: '955', duration: 60 },
    { artistId: 221, stageId: 1, day: 1, time: '1100', duration: 60 },
    { artistId: 0, stageId: 1, day: 2, time: '1200', duration: 40 },
    { artistId: 110, stageId: 1, day: 2, time: '1245', duration: 60 },
    { artistId: 278, stageId: 1, day: 2, time: '150', duration: 60 },
    { artistId: 61, stageId: 1, day: 2, time: '255', duration: 60 },
    { artistId: 305, stageId: 1, day: 2, time: '400', duration: 60 },
    { artistId: 76, stageId: 1, day: 2, time: '505', duration: 60 },
    { artistId: 227, stageId: 1, day: 2, time: '610', duration: 60 },
    { artistId: 27, stageId: 1, day: 2, time: '715', duration: 90 },
    { artistId: 224, stageId: 1, day: 2, time: '850', duration: 60 },
    { artistId: 1, stageId: 1, day: 2, time: '955', duration: 60 },
    { artistId: 343, stageId: 1, day: 2, time: '1100', duration: 60 },
    { artistId: 175, stageId: 1, day: 3, time: '1200', duration: 60 },
    { artistId: 111, stageId: 1, day: 3, time: '105', duration: 60 },
    { artistId: 257, stageId: 1, day: 3, time: '210', duration: 60 },
    { artistId: 329, stageId: 1, day: 3, time: '315', duration: 60 },
    { artistId: 41, stageId: 1, day: 3, time: '420', duration: 75 },
    { artistId: 42, stageId: 1, day: 3, time: '540', duration: 60 },
    { artistId: 11, stageId: 1, day: 3, time: '645', duration: 60 },
    { artistId: 29, stageId: 1, day: 3, time: '750', duration: 60 },
    { artistId: 7, stageId: 1, day: 3, time: '855', duration: 60 },
    { artistId: 26, stageId: 1, day: 3, time: '1000', duration: 60 },

    { artistId: 330, stageId: 2, day: 1, time: '500', duration: 75 },
    { artistId: 341, stageId: 2, day: 1, time: '630', duration: 75 },
    { artistId: 50, stageId: 2, day: 1, time: '800', duration: 75 },
    { artistId: 223, stageId: 2, day: 1, time: '930', duration: 75 },
    { artistId: 24, stageId: 2, day: 1, time: '1100', duration: 60 },
    { artistId: 113, stageId: 2, day: 2, time: '200', duration: 90 },
    { artistId: 114, stageId: 2, day: 2, time: '345', duration: 75 },
    { artistId: 344, stageId: 2, day: 2, time: '515', duration: 60 },
    { artistId: 218, stageId: 2, day: 2, time: '615', duration: 75 },
    { artistId: 219, stageId: 2, day: 2, time: '745', duration: 75 },
    { artistId: 217, stageId: 2, day: 2, time: '915', duration: 75 },
    { artistId: 22, stageId: 2, day: 2, time: '1045', duration: 75 },
    { artistId: 304, stageId: 2, day: 3, time: '200', duration: 30 },
    { artistId: 280, stageId: 2, day: 3, time: '255', duration: 75 },
    { artistId: 249, stageId: 2, day: 3, time: '525', duration: 75 },
    { artistId: 250, stageId: 2, day: 3, time: '645', duration: 75 },
    { artistId: 222, stageId: 2, day: 3, time: '815', duration: 75 },
    { artistId: 220, stageId: 2, day: 3, time: '1000', duration: 120 },
    
    { artistId: 345, stageId: 3, day: 1, time: '400', duration: 90 },
    { artistId: 115, stageId: 3, day: 1, time: '530', duration: 90 },
    { artistId: 49, stageId: 3, day: 1, time: '700', duration: 90 },
    { artistId: 17, stageId: 3, day: 1, time: '830', duration: 90 },
    { artistId: 5, stageId: 3, day: 1, time: '1000', duration: 120 },
    { artistId: 272, stageId: 3, day: 2, time: '1200', duration: 90 },
    { artistId: 290, stageId: 3, day: 2, time: '130', duration: 90 },
    { artistId: 54, stageId: 3, day: 2, time: '300', duration: 120 },
    { artistId: 79, stageId: 3, day: 2, time: '500', duration: 90 },
    { artistId: 228, stageId: 3, day: 2, time: '630', duration: 90 },
    { artistId: 226, stageId: 3, day: 2, time: '800', duration: 120 },
    { artistId: 5, stageId: 3, day: 2, time: '1000', duration: 120 },
    { artistId: 346, stageId: 3, day: 3, time: '1200', duration: 60 },
    { artistId: 265, stageId: 3, day: 3, time: '100', duration: 60 },
    { artistId: 241, stageId: 3, day: 3, time: '200', duration: 60 },
    { artistId: 327, stageId: 3, day: 3, time: '300', duration: 60 },
    { artistId: 339, stageId: 3, day: 3, time: '400', duration: 60 },
    { artistId: 72, stageId: 3, day: 3, time: '500', duration: 60 },
    { artistId: 33, stageId: 3, day: 3, time: '600', duration: 60 },
    { artistId: 281, stageId: 3, day: 3, time: '700', duration: 60 },
    { artistId: 319, stageId: 3, day: 3, time: '800', duration: 60 },
    { artistId: 2, stageId: 3, day: 3, time: '900', duration: 120 },
    
    { artistId: 270, stageId: 4, day: 1, time: '430', duration: 60 },
    { artistId: 245, stageId: 4, day: 1, time: '530', duration: 60 },
    { artistId: 66, stageId: 4, day: 1, time: '630', duration: 60 },
    { artistId: 308, stageId: 4, day: 1, time: '730', duration: 60 },
    { artistId: 120, stageId: 4, day: 1, time: '830', duration: 25 },
    { artistId: 44, stageId: 4, day: 1, time: '855', duration: 60 },
    { artistId: 57, stageId: 4, day: 1, time: '955', duration: 60 },
    { artistId: 74, stageId: 4, day: 1, time: '1055', duration: 60 },
    { artistId: 273, stageId: 4, day: 2, time: '1230', duration: 60 },
    { artistId: 285, stageId: 4, day: 2, time: '130', duration: 60 },
    { artistId: 323, stageId: 4, day: 2, time: '230', duration: 60 },
    { artistId: 298, stageId: 4, day: 2, time: '330', duration: 60 },
    { artistId: 307, stageId: 4, day: 2, time: '430', duration: 60 },
    { artistId: 306, stageId: 4, day: 2, time: '530', duration: 60 },
    { artistId: 0, stageId: 4, day: 2, time: '630', duration: 60 },
    { artistId: 347, stageId: 4, day: 2, time: '730', duration: 60 },
    { artistId: 120, stageId: 4, day: 2, time: '830', duration: 25 },
    { artistId: 259, stageId: 4, day: 2, time: '855', duration: 60 },
    { artistId: 9, stageId: 4, day: 2, time: '955', duration: 60 },
    { artistId: 225, stageId: 4, day: 2, time: '1055', duration: 60 },
    { artistId: 184, stageId: 4, day: 3, time: '1200', duration: 45 },
    { artistId: 177, stageId: 4, day: 3, time: '1245', duration: 45 },
    { artistId: 261, stageId: 4, day: 3, time: '130', duration: 120 },
    { artistId: 340, stageId: 4, day: 3, time: '330', duration: 60 },
    { artistId: 59, stageId: 4, day: 3, time: '430', duration: 60 },
    { artistId: 46, stageId: 4, day: 3, time: '530', duration: 60 },
    { artistId: 333, stageId: 4, day: 3, time: '630', duration: 60 },
    { artistId: 271, stageId: 4, day: 3, time: '730', duration: 60 },
    { artistId: 120, stageId: 4, day: 3, time: '830', duration: 25 },
    { artistId: 12, stageId: 4, day: 3, time: '855', duration: 60 },
    
    { artistId: 125, stageId: 6, day: 1, time: '400', duration: 60 },
    { artistId: 161, stageId: 6, day: 1, time: '500', duration: 60 },
    { artistId: 347, stageId: 6, day: 1, time: '600', duration: 60 },
    { artistId: 62, stageId: 6, day: 1, time: '700', duration: 60 },
    { artistId: 316, stageId: 6, day: 1, time: '800', duration: 60 },
    { artistId: 277, stageId: 6, day: 1, time: '900', duration: 60 },
    { artistId: 229, stageId: 6, day: 1, time: '1000', duration: 60 },
    { artistId: 264, stageId: 6, day: 1, time: '1100', duration: 60 },
    { artistId: 127, stageId: 6, day: 2, time: '1200', duration: 60 },
    { artistId: 128, stageId: 6, day: 2, time: '100', duration: 60 },
    { artistId: 187, stageId: 6, day: 2, time: '200', duration: 60 },
    { artistId: 332, stageId: 6, day: 2, time: '300', duration: 60 },
    { artistId: 348, stageId: 6, day: 2, time: '400', duration: 60 },
    { artistId: 299, stageId: 6, day: 2, time: '500', duration: 60 },
    { artistId: 336, stageId: 6, day: 2, time: '600', duration: 60 },
    { artistId: 334, stageId: 6, day: 2, time: '700', duration: 60 },
    { artistId: 84, stageId: 6, day: 2, time: '800', duration: 60 },
    { artistId: 51, stageId: 6, day: 2, time: '900', duration: 60 },
    { artistId: 230, stageId: 6, day: 2, time: '1000', duration: 60 },
    { artistId: 318, stageId: 6, day: 2, time: '1100', duration: 60 },
    { artistId: 313, stageId: 6, day: 3, time: '1200', duration: 60 },
    { artistId: 283, stageId: 6, day: 3, time: '100', duration: 60 },
    { artistId: 152, stageId: 6, day: 3, time: '200', duration: 60 },
    { artistId: 160, stageId: 6, day: 3, time: '300', duration: 60 },
    { artistId: 130, stageId: 6, day: 3, time: '400', duration: 60 },
    { artistId: 324, stageId: 6, day: 3, time: '500', duration: 60 },
    { artistId: 95, stageId: 6, day: 3, time: '600', duration: 60 },
    { artistId: 317, stageId: 6, day: 3, time: '700', duration: 60 },
    { artistId: 331, stageId: 6, day: 3, time: '800', duration: 60 },
    { artistId: 88, stageId: 6, day: 3, time: '900', duration: 60 },
    { artistId: 284, stageId: 6, day: 3, time: '1000', duration: 60 },
    
    { artistId: 325, stageId: 7, day: 1, time: '400', duration: 60 },
    { artistId: 246, stageId: 7, day: 1, time: '500', duration: 60 },
    { artistId: 282, stageId: 7, day: 1, time: '600', duration: 60 },
    { artistId: 89, stageId: 7, day: 1, time: '700', duration: 60 },
    { artistId: 58, stageId: 7, day: 1, time: '800', duration: 60 },
    { artistId: 302, stageId: 7, day: 1, time: '900', duration: 60 },
    { artistId: 291, stageId: 7, day: 1, time: '1000', duration: 60 },
    { artistId: 256, stageId: 7, day: 1, time: '1100', duration: 60 },
    { artistId: 253, stageId: 7, day: 2, time: '1200', duration: 75 },
    { artistId: 337, stageId: 7, day: 2, time: '115', duration: 75 },
    { artistId: 258, stageId: 7, day: 2, time: '230', duration: 75 },
    { artistId: 142, stageId: 7, day: 2, time: '345', duration: 75 },
    { artistId: 145, stageId: 7, day: 2, time: '500', duration: 75 },
    { artistId: 293, stageId: 7, day: 2, time: '615', duration: 75 },
    { artistId: 156, stageId: 7, day: 2, time: '730', duration: 60 },
    { artistId: 103, stageId: 7, day: 2, time: '830', duration: 90 },
    { artistId: 290, stageId: 7, day: 2, time: '1000', duration: 60 },
    { artistId: 154, stageId: 7, day: 2, time: '1100', duration: 60 },
    { artistId: 255, stageId: 7, day: 3, time: '1200', duration: 90 },
    { artistId: 320, stageId: 7, day: 3, time: '130', duration: 90 },
    { artistId: 247, stageId: 7, day: 3, time: '300', duration: 60 },
    { artistId: 262, stageId: 7, day: 3, time: '400', duration: 60 },
    { artistId: 321, stageId: 7, day: 3, time: '500', duration: 60 },
    { artistId: 1, stageId: 7, day: 3, time: '600', duration: 150 },
    { artistId: 338, stageId: 7, day: 3, time: '930', duration: 30 },
    { artistId: 78, stageId: 7, day: 3, time: '1000', duration: 60 },
    
    { artistId: 188, stageId: 9, day: 1, time: '400', duration: 60 },
    { artistId: 310, stageId: 9, day: 1, time: '500', duration: 60 },
    { artistId: 300, stageId: 9, day: 1, time: '600', duration: 60 },
    { artistId: 286, stageId: 9, day: 1, time: '700', duration: 60 },
    { artistId: 197, stageId: 9, day: 1, time: '800', duration: 60 },
    { artistId: 203, stageId: 9, day: 1, time: '900', duration: 60 },
    { artistId: 213, stageId: 9, day: 1, time: '1000', duration: 60 },
    { artistId: 194, stageId: 9, day: 1, time: '1100', duration: 60 },
    { artistId: 266, stageId: 9, day: 2, time: '1200', duration: 60 },
    { artistId: 267, stageId: 9, day: 2, time: '100', duration: 60 },
    { artistId: 196, stageId: 9, day: 2, time: '200', duration: 60 },
    { artistId: 252, stageId: 9, day: 2, time: '300', duration: 60 },
    { artistId: 207, stageId: 9, day: 2, time: '400', duration: 60 },
    { artistId: 191, stageId: 9, day: 2, time: '500', duration: 60 },
    { artistId: 190, stageId: 9, day: 2, time: '600', duration: 60 },
    { artistId: 211, stageId: 9, day: 2, time: '700', duration: 60 },
    { artistId: 200, stageId: 9, day: 2, time: '800', duration: 60 },
    { artistId: 193, stageId: 9, day: 2, time: '900', duration: 60 },
    { artistId: 251, stageId: 9, day: 2, time: '1000', duration: 60 },
    { artistId: 0, stageId: 9, day: 2, time: '1100', duration: 60 },
    { artistId: 215, stageId: 9, day: 3, time: '1200', duration: 60 },
    { artistId: 189, stageId: 9, day: 3, time: '100', duration: 60 },
    { artistId: 275, stageId: 9, day: 3, time: '200', duration: 60 },
    { artistId: 295, stageId: 9, day: 3, time: '300', duration: 60 },
    { artistId: 289, stageId: 9, day: 3, time: '400', duration: 60 },
    { artistId: 349, stageId: 9, day: 3, time: '500', duration: 60 },
    { artistId: 301, stageId: 9, day: 3, time: '600', duration: 60 },
    { artistId: 0, stageId: 9, day: 3, time: '700', duration: 60 },
    { artistId: 210, stageId: 9, day: 3, time: '800', duration: 60 },
    { artistId: 209, stageId: 9, day: 3, time: '900', duration: 60 },
    { artistId: 206, stageId: 9, day: 3, time: '1000', duration: 60 },
    
    { artistId: 335, stageId: 10, day: 1, time: '400', duration: 60 },
    { artistId: 350, stageId: 10, day: 1, time: '500', duration: 60 },
    { artistId: 297, stageId: 10, day: 1, time: '600', duration: 60 },
    { artistId: 303, stageId: 10, day: 1, time: '700', duration: 60 },
    { artistId: 161, stageId: 10, day: 1, time: '800', duration: 60 },
    { artistId: 242, stageId: 10, day: 1, time: '900', duration: 60 },
    { artistId: 269, stageId: 10, day: 1, time: '1000', duration: 60 },
    { artistId: 294, stageId: 10, day: 1, time: '1100', duration: 60 },
    { artistId: 0, stageId: 10, day: 2, time: '1200', duration: 60 },
    { artistId: 311, stageId: 10, day: 2, time: '100', duration: 60 },
    { artistId: 268, stageId: 10, day: 2, time: '200', duration: 60 },
    { artistId: 178, stageId: 10, day: 2, time: '300', duration: 60 },
    { artistId: 169, stageId: 10, day: 2, time: '400', duration: 60 },
    { artistId: 198, stageId: 10, day: 2, time: '500', duration: 60 },
    { artistId: 314, stageId: 10, day: 2, time: '600', duration: 60 },
    { artistId: 182, stageId: 10, day: 2, time: '700', duration: 60 },
    { artistId: 185, stageId: 10, day: 2, time: '800', duration: 60 },
    { artistId: 174, stageId: 10, day: 2, time: '900', duration: 60 },
    { artistId: 243, stageId: 10, day: 2, time: '1000', duration: 60 },
    { artistId: 111, stageId: 10, day: 2, time: '1100', duration: 60 },
    { artistId: 0, stageId: 10, day: 3, time: '1200', duration: 60 },
    { artistId: 274, stageId: 10, day: 3, time: '100', duration: 60 },
    { artistId: 328, stageId: 10, day: 3, time: '200', duration: 60 },
    { artistId: 287, stageId: 10, day: 3, time: '300', duration: 60 },
    { artistId: 360, stageId: 10, day: 3, time: '400', duration: 60 },
    { artistId: 313, stageId: 10, day: 3, time: '500', duration: 60 },
    { artistId: 351, stageId: 10, day: 3, time: '600', duration: 60 },
    { artistId: 170, stageId: 10, day: 3, time: '700', duration: 60 },
    { artistId: 171, stageId: 10, day: 3, time: '800', duration: 60 },
    { artistId: 312, stageId: 10, day: 3, time: '900', duration: 60 },
    { artistId: 183, stageId: 10, day: 3, time: '1000', duration: 60 }
    
  ];

  function loadPage(uri) {
    var renderHost = document.querySelector(".renderingPageControls-renderedControl");  
    while(renderHost.hasChildNodes()) renderHost.removeChild(renderHost.firstChild);
      
    WinJS.UI.Pages.render(uri, renderHost).done();
  }

  WinJS.Namespace.define("Umf", {
    screenSize: 'small',
    artists: artists,
    stages: stages,
    artistStageMap: artistStageMap,
    getStage: function (stageId) {
      var selectedStage = null;
      this.stages.forEach(function (stage) {
        if(stage.id == stageId)
          selectedStage = stage;
      });
      return selectedStage;
    },
    getArtist: function (artistId) {
      var a = null;
      this.artists.forEach(function (artist) {
        if(artist.id == artistId)
          a = artist;
      });
      return a;
    },
    getArtistStage: function (artistId) {
      var stage = null;
      this.artistStageMap.forEach(function (artistStageMap) {
        if(artistStageMap.artistId == artistId)
          stage = Umf.getStage(artistStageMap.stageId);
      });
      return stage;
    },
    getArtistStageMap: function (artistId) {
      var stageMap = null;
      this.artistStageMap.forEach(function (artistStageMap) {
        if(artistStageMap.artistId == artistId)
          stageMap = artistStageMap;
      });
      return stageMap;
    },
    showSchedulePane: function () {
      loadPage('/pages/schedule/schedule.html');
    },
    showLineupPane: function () {
      loadPage('/pages/lineup/lineup.html');
    },
    showSitemapPane: function () {
      loadPage('/pages/sitemap/sitemap.html');
    },
    schedule: {
      schedule: [],
      add: function (artistId) {
        if(!isNaN(parseInt(artistId)))
          this.schedule.push(artistId);
        this.save();
      },
      remove: function (artistId) {
        if(!isNaN(parseInt(artistId))) {
          var indexToRemove = -1;
          this.schedule.forEach(function (el, i) {
            if(el == artistId) indexToRemove = i;
          });
          if(indexToRemove >= 0)
            this.schedule.splice(indexToRemove, 1);
        }
        this.save();
      },
      isArtistInSchedule: function (artistId) {
        if(isNaN(parseInt(artistId))) return false;
        
        var found = false;
        this.schedule.forEach(function (id) {
          if(id === artistId) found = true;
        });
        return found;
      },
      parse: function (data) {
        if(data.length <= 0) {
          console.info('Schedule data empty or not initialized yet.');
          return [];
        }

        var parsedData = [];
        try {
          parsedData = JSON.parse(data);
        }
        catch (ex) {
          console.error('Could not parse schedule from roaming data store.');
        }
        return parsedData;
      },
      load: function () {
        var promise = new WinJS.Promise(function (complete, error, progress) {
          if(WinJS.Application.roaming.exists('userSchedule'))
            WinJS.Application.roaming.readText('userSchedule', '').done(function (data) {
              Umf.schedule.schedule = Umf.schedule.parse(data);
              complete();
            });
        });

        return promise;
      },
      save: function () {
        var serializedData = '';
        try {
          serializedData = JSON.stringify(Umf.schedule.schedule);
        }
        catch (ex) {
          console.error('Could not serialize schedule for roaming data store.');
        }
        
        WinJS.Application.roaming.writeText('userSchedule', serializedData);
      }
    }
  });
  
  function setScreenToLarge() {
    var app = document.getElementById('app');
    app.classList.add('large');
    app.classList.remove('medium');
    app.classList.remove('small');
    Umf.screenSize = 'large';
  }
  function setScreenToMedium() {
    var app = document.getElementById('app');
    app.classList.remove('large');
    app.classList.add('medium');
    app.classList.remove('small');
    Umf.screenSize = 'medium';
  }
  function setScreenToSmall() {
    var app = document.getElementById('app');
    app.classList.remove('large');
    app.classList.remove('medium');
    app.classList.add('small');
    Umf.screenSize = 'small';
  }
  function setScreenSizeClass() {
    var size = window.innerWidth;
    if(size <= 500)
      setScreenToSmall();
    else if(size <= 1000)
      setScreenToMedium();
    else
      setScreenToLarge();
  }

  WinJS.UI.processAll().done(function () {
    WinJS.Application.roaming.readText('version', '').done(function (data) {
      if (!data.length || data !== '1.5.0') {
        WinJS.Application.roaming.writeText('userSchedule', '');
        var contentDialog = document.querySelector(".win-contentdialog").winControl;
        contentDialog.show();
        WinJS.Application.roaming.writeText('version', '1.5.0');
      }
    });

    Umf.schedule.load().then(function () {  
      if(Umf.schedule.schedule.length)
        Umf.showSchedulePane();
      else
        Umf.showLineupPane();
    });

    var splitView = document.querySelector(".splitView").winControl;
    
    var svCommand = document.querySelectorAll('.nav-commands div[data-win-control="WinJS.UI.SplitViewCommand"]');
    Array.prototype.forEach.call(svCommand, function (el, ix) {
      if(ix === 0)
        svCommand[0].winControl.addEventListener('invoked', Umf.showSchedulePane);
      else if(ix === 1)
        svCommand[1].winControl.addEventListener('invoked', Umf.showLineupPane);
      else if(ix === 2)
        svCommand[2].winControl.addEventListener('invoked', Umf.showSitemapPane);
    });

    setScreenSizeClass();
    window.addEventListener('resize', setScreenSizeClass);

    new WinJS.UI._WinKeyboard(splitView.paneElement);
  });

  app.start();
}());