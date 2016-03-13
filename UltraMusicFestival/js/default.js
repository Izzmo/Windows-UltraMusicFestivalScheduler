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
    new Artist(1, 'Afrojack', '/images/artists/afrojack.jpg', '', '', '', true),
    new Artist(2, 'Armin Van Buuren', '/images/artists/ArminvanBuuren-update.jpg', '', '', '', true),
    new Artist(3, 'Avicii', '/images/artists/avicii-2016.jpg', '', '', '', true),
    new Artist(4, 'Caribou', '/images/artists/caribou.jpg', '', '', '', true),
    new Artist(5, 'Carl Cox', '/images/artists/carlcox-update.jpg', '', '', '', true),
    new Artist(6, 'Chet Faker', '/images/artists/chetfaker.jpg', '', '', '', true),
    new Artist(77, 'Crystal Castles', '/images/artists/crystalcastles-temp.jpg', '', '', '', true),
    new Artist(76, 'Dash Berlin', '/images/artists/DashBerlin.jpg', '', '', '', true),
    new Artist(7, 'David Guetta', '/images/artists/david-guetta.jpg', '', '', '', true),
    new Artist(75, 'deadmau5', '/images/artists/deadmau5_main.jpg', '', '', '', true),
    new Artist(8, 'Destroid', '/images/artists/destroid.jpg', '', '', '', true),
    new Artist(9, 'Dubfire', '/images/artists/dubfire.jpg', '', '', '', true),
    new Artist(10, 'Eric Prydz', '/images/artists/ericprydz-update.jpg', '', '', '', true),
    new Artist(11, 'Hardwell', '/images/artists/Hardwell.jpg', '', '', '', true),
    new Artist(12, 'Jamie Jones', '/images/artists/jamiejones-2.jpg', '', '', '', true),
    new Artist(13, 'Kaskade', '/images/artists/kaskade.jpg', '', '', '', true),
    new Artist(14, 'Knife Party', '/images/artists/KnifeParty.jpg', '', '', '', true),
    new Artist(15, 'Kygo', '/images/artists/Kygo.jpg', '', '', '', true),
    new Artist(16, 'Loco Dice', '/images/artists/locodice-update.jpg', '', '', '', true),
    new Artist(74, 'Maceo Plex', '/images/artists/maceoplex-update.jpg', '', '', '', true),
    new Artist(17, 'Marco Carola', '/images/artists/marcocarola-update.jpg', '', '', '', true),
    new Artist(18, 'Martin Garrix', '/images/artists/martingarrix-2.jpg', '', '', '', true),
    new Artist(19, 'Miike Snow', '/images/artists/miikesnow.jpg', '', '', '', true),
    new Artist(20, 'Nero', '/images/artists/nero-ph.jpg', '', '', '', true),
    new Artist(21, 'Pendulum', '/images/artists/pendulum-placeholder.jpg', '', '', '', true),
    new Artist(22, 'The Prodigy', '/images/artists/theprodigy.jpg', '', '', '', true),
    new Artist(23, 'Purity Ring', '/images/artists/purityring.jpg', '', '', '', true),
    new Artist(24, 'Rabbit on the Moon', '/images/artists/rabbitinthemoon-ph.jpg', '', '', '', true),
    new Artist(73, 'Richie Hawtin', '/images/artists/richiehawtin.jpg', '', '', '', true),
    new Artist(25, 'Seth Troxler', '/images/artists/sethtroxler.jpg', '', '', '', true),
    new Artist(26, 'DJ Snake', '/images/artists/djsnake-2.jpg', '', '', '', true),
    new Artist(72, 'Steve Angello', '/images/artists/steveangello.jpg', '', '', '', true),
    new Artist(27, 'Tiesto', '/images/artists/Tiesto.jpg', '', '', '', true),
    new Artist(28, 'Tycho', '/images/artists/tycho.jpg', '', '', '', true),
    new Artist(29, 'Zedd', '/images/artists/zedd.jpg', '', '', '', true),

    new Artist(30, 'AlunaGeorge', '/images/artists/alunageorge-update.jpg', '', '', '', false),
    new Artist(31, 'Alison Wonderland', '/images/artists/alisonwonderland.jpg', '', '', '', false),
    new Artist(72, 'Aly & Fila', '/images/artists/alyfija.jpg', '', '', '', false),
    new Artist(32, 'andhim', '/images/artists/andhim.jpg', '', '', '', false),
    new Artist(33, 'Andrew Rayel', '/images/artists/andrewrayel-update.jpg', '', '', '', false),
    new Artist(34, 'Apollonia', '/images/artists/Apollonia-update.jpg', '', '', '', false),
    new Artist(35, 'Art Department', '/images/artists/artdepartment-2.jpg', '', '', '', false),
    new Artist(78, 'Bass Jackers', '/images/artists/bassjackers-temp.jpg', '', '', '', false),
    new Artist(79, 'Black Coffee', '/images/artists/blackcoffee.jpg', '', '', '', false),
    new Artist(80, 'BlasterJaxx', '/images/artists/blasterjaxx.jpg', '', '', '', false),
    new Artist(81, 'Bob Moses', '/images/artists/bobmoses.jpg', '', '', '', false),
    new Artist(82, 'Borgeous', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(83, 'Brillz', '/images/artists/brillz.jpg', '', '', '', false),
    new Artist(36, 'Carnage', '/images/artists/Carnage.jpg', '', '', '', false),
    new Artist(84, 'Cedric Gervais', '/images/artists/cedricgervais.jpg', '', '', '', false),
    new Artist(37, 'The Chainsmokers', '/images/artists/thechainsmokers.jpg', '', '', '', false),
    new Artist(85, 'Dannic', '/images/artists/dannic.jpg', '', '', '', false),
    new Artist(86, 'Don Diablo', '/images/artists/dondiablo.jpg', '', '', '', false),
    new Artist(38, 'Duke Dumont', '/images/artists/dukedumont.jpg', '', '', '', false),
    new Artist(39, 'DVBBS', '/images/artists/dvbbs.jpg', '', '', '', false),
    new Artist(40, 'Fakear', '/images/artists/fakear-ph.jpg', '', '', '', false),
    new Artist(41, 'Fedde le Grand', '/images/artists/FeddeLeGrand.jpg', '', '', '', false),
    new Artist(87, 'Felix Jaehn', '/images/artists/felixjaehn.jpg', '', '', '', false),
    new Artist(42, 'Galantis', '/images/artists/galantis.jpg', '', '', '', false),
    new Artist(88, 'Getter', '/images/artists/getter.jpg', '', '', '', false),
    new Artist(89, 'Gryffin', '/images/artists/gryffinbg.jpg', '', '', '', false),
    new Artist(43, 'Guy Gerber', '/images/artists/guygerber-3.jpg', '', '', '', false),
    new Artist(44, 'Hot Since 82', '/images/artists/hotsince82-update.jpg', '', '', '', false),
    new Artist(45, 'Icona Pop', '/images/artists/iconapop.jpg', '', '', '', false),
    new Artist(46, 'Jackmaster', '/images/artists/jackmaster.jpg', '', '', '', false),
    new Artist(47, 'Jauz', '/images/artists/jauz-ph.jpg', '', '', '', false),
    new Artist(90, 'John Digweed', '/images/artists/johndigweed.jpg', '', '', '', false),
    new Artist(48, 'Joris Voorn', '/images/artists/jorisvoorn-update.jpg', '', '', '', false),
    new Artist(49, 'Joseph Capriati', '/images/artists/josephcapriati.jpg', '', '', '', false),
    new Artist(92, 'KiNK', '/images/artists/kink.jpg', '', '', '', false),
    new Artist(50, 'KSHMR', '/images/artists/kshmr.jpg', '', '', '', false),
    new Artist(51, 'Laidback Luke', '/images/artists/LaidbackLuke.jpg', '', '', '', false),
    new Artist(52, 'Lee Foss', '/images/artists/leefoss.jpg', '', '', '', false),
    new Artist(93, 'LOUDPVCK', '/images/artists/loudpvck.jpg', '', '', '', false),
    new Artist(94, 'MAKJ', '/images/artists/makj.jpg', '', '', '', false),
    new Artist(95, 'MALAA', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(96, 'Marco Bailey', '/images/artists/marcobailey.jpg', '', '', '', false),
    new Artist(97, 'Markus Schulz', '/images/artists/markusschulz.jpg', '', '', '', false),
    new Artist(53, 'Marshmello', '/images/artists/marshmello-2.jpg', '', '', '', false),
    new Artist(54, 'The Martinez Brothers', '/images/artists/themartinezbrothers-update.jpg', '', '', '', false),
    new Artist(55, 'Mind Against', '/images/artists/mindagainst-2.jpg', '', '', '', false),
    new Artist(56, 'MK', '/images/artists/mk-update.jpg', '', '', '', false),
    new Artist(98, 'Morten', '/images/artists/morten.jpg', '', '', '', false),
    new Artist(57, 'Nic Fanciulli', '/images/artists/nicfanciulli-update.jpg', '', '', '', false),
    new Artist(99, 'Nicole Moudaber', '/images/artists/nicolemoudaber.jpg', '', '', '', false),
    new Artist(100, 'Ookay', '/images/artists/ookay.jpg', '', '', '', false),
    new Artist(58, 'Party Favor', '/images/artists/partyfavor.jpg', '', '', '', false),
    new Artist(59, 'Patrick Topping', '/images/artists/patricktopping.jpg', '', '', '', false),
    new Artist(101, 'Peaches', '/images/artists/peaches.jpg', '', '', '', false),
    new Artist(60, 'Robin Schulz', '/images/artists/robinschulz.jpg', '', '', '', false),
    new Artist(61, 'Sam Feldt', '/images/artists/samfeldt-2.jpg', '', '', '', false),
    new Artist(105, 'Sasha', '/images/artists/sasha.jpg', '', '', '', false),
    new Artist(104, 'Skream', '/images/artists/skream-placeholder.jpg', '', '', '', false),
    new Artist(62, 'Slander', '/images/artists/slander.jpg', '', '', '', false),
    new Artist(63, 'Snails', '/images/artists/snails.jpg', '', '', '', false),
    new Artist(64, 'SNBRN', '/images/artists/snbrn-ph.jpg', '', '', '', false),
    new Artist(65, 'Tchami', '/images/artists/tchami-2.jpg', '', '', '', false),
    new Artist(66, 'Technasia', '/images/artists/technasia.jpg', '', '', '', false),
    new Artist(67, 'Thugfucker', '/images/artists/thugfucker-2.jpg', '', '', '', false),
    new Artist(68, 'Thomas Jack', '/images/artists/thomasjack.jpg', '', '', '', false),
    new Artist(103, 'Valentino Khan', '/images/artists/valentinokhan.jpg', '', '', '', false),
    new Artist(102, 'DJ Vice', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(69, 'Vicetone', '/images/artists/Vicetone.jpg', '', '', '', false),
    new Artist(70, 'W&W', '/images/artists/ww-update.jpg', '', '', '', false),
    new Artist(91, 'Wave Racer', '/images/artists/waveracer.jpg', '', '', '', false),
    new Artist(71, 'Yellow Claw', '/images/artists/yellowclaw.jpg', '', '', '', false),
    
    new Artist(106, 'Julian Jordan', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(107, 'Vintage Culture', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(108, 'Alok', '/images/artists/alok.jpg', '', '', '', false),
    new Artist(109, 'Dyro', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(110, 'Tommie Sunshine', '/images/artists/tommiesunshine.jpg', '', '', '', false),
    new Artist(111, 'Mykris', '/images/artists/mykris.jpg', '', '', '', false),
    new Artist(112, 'Michael Calfan', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(113, 'Afrobeta', '/images/artists/afrobeta-play-house-credit-Daniel-Sannwald.jpg', '', '', '', false),
    new Artist(114, 'Lexz Pryde', '/images/artists/lexzpryde.jpg', '', '', '', false),
    new Artist(115, 'Cristian Varela B2B Jon Rundell', '/images/artists/jonrundell.jpg', '', '', '', false),
    new Artist(116, 'Khomha', '/images/artists/khomha.jpg', '', '', '', false),
    new Artist(117, 'Ben Gold', '/images/artists/bengold.jpg', '', '', '', false),
    new Artist(118, 'Marlo', '/images/artists/marlo.jpg', '', '', '', false),
    new Artist(119, 'The Roaches', '/images/artists/theroaches.jpg', '', '', '', false),
    new Artist(120, 'Arcadia Landing Show', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(121, 'Camilo Franco', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(122, 'Monika Kruse', '/images/artists/monika.jpg', '', '', '', false),
    new Artist(123, 'Elio Riso', '/images/artists/elioriso.jpg', '', '', '', false),
    new Artist(124, 'Harvard Bass', '/images/artists/harvardbass.jpg', '', '', '', false),
    new Artist(125, 'Justin Oh', '/images/artists/justinoh-placeholder.jpg', '', '', '', false),
    new Artist(126, 'Raiden', '/images/artists/raiden-placeholder.jpg', '', '', '', false),
    new Artist(127, 'TJO', '/images/artists/TJO.jpg', '', '', '', false),
    new Artist(128, 'Ksuke', '/images/artists/ksuke.jpg', '', '', '', false),
    new Artist(129, 'Sigala', '/images/artists/sigala.jpg', '', '', '', false),
    new Artist(130, 'Mercer', '/images/artists/mercer.jpg', '', '', '', false),
    new Artist(131, 'Anevo', '/images/artists/anevo.jpg', '', '', '', false),
    new Artist(132, 'Unlike Pluto', '/images/artists/unlikepluto.jpg', '', '', '', false),
    new Artist(133, 'Domeno', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(134, 'Merk & Kremont', '/images/artists/merkandkremont-temp.jpg', '', '', '', false),
    new Artist(135, 'Paris Blohm', '/images/artists/parisblohm.jpg', '', '', '', false),
    new Artist(136, 'Tom Swoon', '/images/artists/tomswoon.jpg', '', '', '', false),
    new Artist(137, 'Sick Individuals', '/images/artists/sickindividuals.jpg', '', '', '', false),
    new Artist(138, 'Josh Pan', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(139, 'Aryay', '/images/artists/aryay.jpg', '', '', '', false),
    new Artist(140, 'Louis The Child', '/images/artists/louisthechild.jpg', '', '', '', false),
    new Artist(141, 'Autoerotique B2B Hunter Siegel', '/images/artists/autoerotique.jpg', '', '', '', false),
    new Artist(142, 'Vindata', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(143, 'Mija', '/images/artists/mija.jpg', '', '', '', false),
    new Artist(144, 'AC Slater B2B Chris Lorenzo', '/images/artists/acslater.jpg', '', '', '', false),
    new Artist(145, 'DJ Sliink', '/images/artists/djsliink.jpg', '', '', '', false),
    new Artist(146, 'Bad Royale', '/images/artists/badroyale.jpg', '', '', '', false),
    new Artist(147, 'TWRK', '/images/artists/twrk.jpg', '', '', '', false),
    new Artist(148, 'Danny L Harle', '/images/artists/dannylharle-temp.jpg', '', '', '', false),
    new Artist(149, 'San Holo', '/images/artists/p1sanholo.jpg', '', '', '', false),
    new Artist(150, 'ETC! ETC!', '/images/artists/etcetc.jpg', '', '', '', false),
    new Artist(151, 'gLadiator', '/images/artists/gladiator-temp.jpg', '', '', '', false),
    new Artist(152, 'Lookas', '/images/artists/lookas.jpg', '', '', '', false),
    new Artist(153, 'Crizzly', '/images/artists/crizzly.jpg', '', '', '', false),
    new Artist(154, 'OWSLA ALL STARS', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(155, 'Thomas Newson', '/images/artists/Thomas-Newson.jpeg', '', '', '', false),
    new Artist(156, 'Wiwek', '/images/artists/wiwek.jpg', '', '', '', false),
    
    new Artist(157, 'Andres Fresko', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(158, 'G Buck', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(159, 'Riggi & Piros', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(160, '4B', '/images/artists/4b.jpg', '', '', '', false),
    new Artist(161, 'DJ Icey', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(162, 'Jackal', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(163, 'Botnek', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(164, 'Alvin Risk', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(165, 'SMLE', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(166, 'Tommy Walker', '/images/artists/tommywalker.jpg', '', '', '', false),
    new Artist(167, 'Nick Talos', '/images/artists/nicktalos.jpg', '', '', '', false),
    new Artist(168, 'Ranidu', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(169, 'Adam Trigger', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(170, 'Rob B', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(171, 'Rodrigo Vieira', '/images/artists/rodrigovieira.jpg', '', '', '', false),
    new Artist(172, 'Infuze', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(173, 'Kennedy Jones', '/images/artists/kennedyjones.jpg', '', '', '', false),
    new Artist(174, 'Diego Miranda', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(175, 'DJ Nano', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(176, 'Mykris', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(177, 'Josefine Rosen', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(178, 'Casey Kiss', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(179, 'Maxum', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(180, 'Travis Emmons', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(181, 'Kandy', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(182, 'Los De La Vega', '/images/artists/losdelavega.jpg', '', '', '', false),
    new Artist(183, 'Antz', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(184, 'Riotgear', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(185, 'DJ Fresh & Euphonic', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(186, 'DJ Samtrakk', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(187, 'Kryoman', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(188, 'Meta Forza', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(189, 'DJ K9', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(190, 'Lemony Snickettes', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(191, 'Teezy', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(192, 'Proxxy B2B Lantern', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(193, 'Jimmie Page', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(194, 'Damaged Goods', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(195, 'Twincitiez', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(196, 'Axion Fuentes', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(197, 'Richard Fraioli', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(198, 'Metaphysical B2B Niko Charidis', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(199, 'Ideal & JBreak', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(200, 'Soul Goodman', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(201, 'Ya Boy TEV', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(202, 'Atellagali', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(203, 'Bass Control', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(204, 'Alyx Ander', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(205, 'GROMO', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(206, 'Takshak', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(207, 'DJ Shalomar', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(208, 'Point Blank Range', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(209, 'WYZZARD', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(210, 'Jason Daniel', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(211, 'Dabura', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(212, 'Drianu / Keyrose', '/images/artists/drianu.jpg', '', '', '', false),
    new Artist(213, 'WAGS', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(214, 'Unk\'l Funk\'l', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(215, 'Rex', '/images/artists/placeholder.jpg', '', '', '', false),
    new Artist(216, 'Adrian Hardy', '/images/artists/placeholder.jpg', '', '', '', false)
  ];
  var stages = [
    new Stage(1, 'Main Stage', null),
    new Stage(2, 'Live Stage', null),
    new Stage(3, 'Carl Cox & Friends', null),
    new Stage(4, 'Resistance', null),
    new Stage(5, 'A State of Trance', null),
    new Stage(6, 'Ultra Worldwide', null),
    new Stage(7, 'UMF Radio', null),
    new Stage(8, 'Stage7', null),
    new Stage(9, 'Oasis', null)
  ];
  var artistStageMap = [
    { artistId: 106, stageId: 1, day: 1, time: 400 },
    { artistId: 80, stageId: 1, day: 1, time: 430 },
    { artistId: 76, stageId: 1, day: 1, time: 535 },
    { artistId: 15, stageId: 1, day: 1, time: 640 },
    { artistId: 13, stageId: 1, day: 1, time: 745 },
    { artistId: 2, stageId: 1, day: 1, time: 850 },
    { artistId: 26, stageId: 1, day: 1, time: 955 },
    { artistId: 18, stageId: 1, day: 1, time: 1100 },
    { artistId: 107, stageId: 1, day: 2, time: 1200 },
    { artistId: 108, stageId: 1, day: 2, time: 100 },
    { artistId: 109, stageId: 1, day: 2, time: 200 },
    { artistId: 94, stageId: 1, day: 2, time: 300 },
    { artistId: 39, stageId: 1, day: 2, time: 400 },
    { artistId: 70, stageId: 1, day: 2, time: 505 },
    { artistId: 72, stageId: 1, day: 2, time: 610 },
    { artistId: 27, stageId: 1, day: 2, time: 715 },
    { artistId: 1, stageId: 1, day: 2, time: 850 },
    { artistId: 3, stageId: 1, day: 2, time: 955 },
    { artistId: 11, stageId: 1, day: 2, time: 1100 },
    { artistId: 110, stageId: 1, day: 3, time: 1200 },
    { artistId: 111, stageId: 1, day: 3, time: 100 },
    { artistId: 112, stageId: 1, day: 3, time: 200 },
    { artistId: 82, stageId: 1, day: 3, time: 305 },
    { artistId: 41, stageId: 1, day: 3, time: 410 },
    { artistId: 42, stageId: 1, day: 3, time: 515 },
    { artistId: 36, stageId: 1, day: 3, time: 620 },
    { artistId: 7, stageId: 1, day: 3, time: 725 },
    { artistId: 29, stageId: 1, day: 3, time: 830 },
    { artistId: 21, stageId: 1, day: 3, time: 940 },
    { artistId: 14, stageId: 1, day: 3, time: 1020 },
    
    { artistId: 40, stageId: 2, day: 1, time: 500 },
    { artistId: 28, stageId: 2, day: 1, time: 630 },
    { artistId: 4, stageId: 2, day: 1, time: 800 },
    { artistId: 6, stageId: 2, day: 1, time: 930 },
    { artistId: 19, stageId: 2, day: 1, time: 1100 },
    { artistId: 113, stageId: 2, day: 2, time: 200 },
    { artistId: 45, stageId: 2, day: 2, time: 330 },
    { artistId: 68, stageId: 2, day: 2, time: 500 },
    { artistId: 30, stageId: 2, day: 2, time: 630 },
    { artistId: 77, stageId: 2, day: 2, time: 800 },
    { artistId: 20, stageId: 2, day: 2, time: 930 },
    { artistId: 22, stageId: 2, day: 2, time: 1100 },
    { artistId: 114, stageId: 2, day: 3, time: 200 },
    { artistId: 101, stageId: 2, day: 3, time: 300 },
    { artistId: 89, stageId: 2, day: 3, time: 430 },
    { artistId: 81, stageId: 2, day: 3, time: 600 },
    { artistId: 8, stageId: 2, day: 3, time: 730 },
    { artistId: 24, stageId: 2, day: 3, time: 850 },
    { artistId: 23, stageId: 2, day: 3, time: 1010 },
    
    { artistId: 34, stageId: 3, day: 1, time: 400 },
    { artistId: 49, stageId: 3, day: 1, time: 630 },
    { artistId: 16, stageId: 3, day: 1, time: 800 },
    { artistId: 5, stageId: 3, day: 1, time: 1000 },
    { artistId: 115, stageId: 3, day: 2, time: 1200 },
    { artistId: 99, stageId: 3, day: 2, time: 400 },
    { artistId: 73, stageId: 3, day: 2, time: 600 },
    { artistId: 17, stageId: 3, day: 2, time: 800 },
    { artistId: 5, stageId: 3, day: 2, time: 1000 },

    { artistId: 116, stageId: 5, day: 3, time: 1200 },
    { artistId: 117, stageId: 5, day: 3, time: 100 },
    { artistId: 118, stageId: 5, day: 3, time: 200 },
    { artistId: 33, stageId: 5, day: 3, time: 300 },
    { artistId: 72, stageId: 5, day: 3, time: 400 },
    { artistId: 97, stageId: 5, day: 3, time: 500 },
    { artistId: 75, stageId: 5, day: 3, time: 610 },
    { artistId: 10, stageId: 5, day: 3, time: 730 },
    { artistId: 2, stageId: 5, day: 3, time: 900 },
    
    { artistId: 119, stageId: 4, day: 1, time: 400 },
    { artistId: 66, stageId: 4, day: 1, time: 530 },
    { artistId: 96, stageId: 4, day: 1, time: 630 },
    { artistId: 48, stageId: 4, day: 1, time: 730 },
    { artistId: 120, stageId: 4, day: 1, time: 830 },
    { artistId: 44, stageId: 4, day: 1, time: 855 },
    { artistId: 90, stageId: 4, day: 1, time: 955 },
    { artistId: 12, stageId: 4, day: 1, time: 1055 },
    { artistId: 121, stageId: 4, day: 2, time: 1200 },
    { artistId: 122, stageId: 4, day: 2, time: 130 },
    { artistId: 59, stageId: 4, day: 2, time: 230 },
    { artistId: 32, stageId: 4, day: 2, time: 330 },
    { artistId: 92, stageId: 4, day: 2, time: 430 },
    { artistId: 67, stageId: 4, day: 2, time: 530 },
    { artistId: 55, stageId: 4, day: 2, time: 630 },
    { artistId: 105, stageId: 4, day: 2, time: 730 },
    { artistId: 120, stageId: 4, day: 2, time: 830 },
    { artistId: 57, stageId: 4, day: 2, time: 855 },
    { artistId: 9, stageId: 4, day: 2, time: 955 },
    { artistId: 74, stageId: 4, day: 2, time: 1055 },
    { artistId: 123, stageId: 4, day: 3, time: 1200 },
    { artistId: 124, stageId: 4, day: 3, time: 130 },
    { artistId: 52, stageId: 4, day: 3, time: 230 },
    { artistId: 104, stageId: 4, day: 3, time: 330 },
    { artistId: 79, stageId: 4, day: 3, time: 430 },
    { artistId: 46, stageId: 4, day: 3, time: 530 },
    { artistId: 35, stageId: 4, day: 3, time: 630 },
    { artistId: 43, stageId: 4, day: 3, time: 730 },
    { artistId: 120, stageId: 4, day: 3, time: 830 },
    { artistId: 54, stageId: 4, day: 3, time: 855 },
    { artistId: 25, stageId: 4, day: 3, time: 955 },
    
    { artistId: 125, stageId: 6, day: 1, time: 400 },
    { artistId: 126, stageId: 6, day: 1, time: 440 },
    { artistId: 102, stageId: 6, day: 1, time: 530 },
    { artistId: 58, stageId: 6, day: 1, time: 620 },
    { artistId: 62, stageId: 6, day: 1, time: 710 },
    { artistId: 63, stageId: 6, day: 1, time: 805 },
    { artistId: 47, stageId: 6, day: 1, time: 900 },
    { artistId: 31, stageId: 6, day: 1, time: 1000 },
    { artistId: 71, stageId: 6, day: 1, time: 1100 },
    { artistId: 127, stageId: 6, day: 2, time: 1200 },
    { artistId: 128, stageId: 6, day: 2, time: 100 },
    { artistId: 129, stageId: 6, day: 2, time: 200 },
    { artistId: 98, stageId: 6, day: 2, time: 300 },
    { artistId: 130, stageId: 6, day: 2, time: 400 },
    { artistId: 69, stageId: 6, day: 2, time: 500 },
    { artistId: 95, stageId: 6, day: 2, time: 600 },
    { artistId: 86, stageId: 6, day: 2, time: 700 },
    { artistId: 51, stageId: 6, day: 2, time: 800 },
    { artistId: 84, stageId: 6, day: 2, time: 900 },
    { artistId: 37, stageId: 6, day: 2, time: 1000 },
    { artistId: 50, stageId: 6, day: 2, time: 1100 },
    { artistId: 131, stageId: 6, day: 3, time: 1200 },
    { artistId: 132, stageId: 6, day: 3, time: 100 },
    { artistId: 91, stageId: 6, day: 3, time: 200 },
    { artistId: 64, stageId: 6, day: 3, time: 300 },
    { artistId: 87, stageId: 6, day: 3, time: 400 },
    { artistId: 61, stageId: 6, day: 3, time: 500 },
    { artistId: 56, stageId: 6, day: 3, time: 600 },
    { artistId: 53, stageId: 6, day: 3, time: 700 },
    { artistId: 38, stageId: 6, day: 3, time: 800 },
    { artistId: 60, stageId: 6, day: 3, time: 900 },
    { artistId: 65, stageId: 6, day: 3, time: 1000 },
    
    { artistId: 133, stageId: 7, day: 1, time: 400 },
    { artistId: 134, stageId: 7, day: 1, time: 500 },
    { artistId: 135, stageId: 7, day: 1, time: 600 },
    { artistId: 136, stageId: 7, day: 1, time: 700 },
    { artistId: 137, stageId: 7, day: 1, time: 800 },
    { artistId: 78, stageId: 7, day: 1, time: 900 },
    { artistId: 85, stageId: 7, day: 1, time: 1000 },
    { artistId: 155, stageId: 7, day: 1, time: 1100 },
    { artistId: 138, stageId: 7, day: 2, time: 1200 },
    { artistId: 139, stageId: 7, day: 2, time: 100 },
    { artistId: 140, stageId: 7, day: 2, time: 200 },
    { artistId: 141, stageId: 7, day: 2, time: 300 },
    { artistId: 142, stageId: 7, day: 2, time: 400 },
    { artistId: 143, stageId: 7, day: 2, time: 500 },
    { artistId: 144, stageId: 7, day: 2, time: 600 },
    { artistId: 145, stageId: 7, day: 2, time: 700 },
    { artistId: 88, stageId: 7, day: 2, time: 800 },
    { artistId: 156, stageId: 7, day: 2, time: 900 },
    { artistId: 103, stageId: 7, day: 2, time: 1000 },
    { artistId: 154, stageId: 7, day: 2, time: 1100 },
    { artistId: 146, stageId: 7, day: 3, time: 1200 },
    { artistId: 147, stageId: 7, day: 3, time: 100 },
    { artistId: 148, stageId: 7, day: 3, time: 200 },
    { artistId: 149, stageId: 7, day: 3, time: 300 },
    { artistId: 150, stageId: 7, day: 3, time: 400 },
    { artistId: 151, stageId: 7, day: 3, time: 500 },
    { artistId: 152, stageId: 7, day: 3, time: 600 },
    { artistId: 153, stageId: 7, day: 3, time: 700 },
    { artistId: 100, stageId: 7, day: 3, time: 800 },
    { artistId: 83, stageId: 7, day: 3, time: 900 },
    { artistId: 93, stageId: 7, day: 3, time: 1000 },
    
    { artistId: 157, stageId: 8, day: 1, time: 400 },
    { artistId: 158, stageId: 8, day: 1, time: 500 },
    { artistId: 159, stageId: 8, day: 1, time: 600 },
    { artistId: 160, stageId: 8, day: 1, time: 700 },
    { artistId: 161, stageId: 8, day: 1, time: 800 },
    { artistId: 162, stageId: 8, day: 1, time: 900 },
    { artistId: 163, stageId: 8, day: 1, time: 1000 },
    { artistId: 164, stageId: 8, day: 1, time: 1100 },
    { artistId: 165, stageId: 8, day: 2, time: 1200 },
    { artistId: 166, stageId: 8, day: 2, time: 100 },
    { artistId: 167, stageId: 8, day: 2, time: 200 },
    { artistId: 168, stageId: 8, day: 2, time: 300 },
    { artistId: 169, stageId: 8, day: 2, time: 400 },
    { artistId: 170, stageId: 8, day: 2, time: 500 },
    { artistId: 171, stageId: 8, day: 2, time: 600 },
    { artistId: 172, stageId: 8, day: 2, time: 700 },
    { artistId: 173, stageId: 8, day: 2, time: 800 },
    { artistId: 174, stageId: 8, day: 2, time: 900 },
    { artistId: 175, stageId: 8, day: 2, time: 1000 },
    { artistId: 176, stageId: 8, day: 2, time: 1100 },
    { artistId: 177, stageId: 8, day: 3, time: 1200 },
    { artistId: 178, stageId: 8, day: 3, time: 100 },
    { artistId: 179, stageId: 8, day: 3, time: 200 },
    { artistId: 180, stageId: 8, day: 3, time: 300 },
    { artistId: 181, stageId: 8, day: 3, time: 400 },
    { artistId: 182, stageId: 8, day: 3, time: 500 },
    { artistId: 183, stageId: 8, day: 3, time: 600 },
    { artistId: 184, stageId: 8, day: 3, time: 700 },
    { artistId: 185, stageId: 8, day: 3, time: 800 },
    { artistId: 186, stageId: 8, day: 3, time: 900 },
    { artistId: 187, stageId: 8, day: 3, time: 1000 },
    
    { artistId: 188, stageId: 9, day: 1, time: 400 },
    { artistId: 189, stageId: 9, day: 1, time: 500 },
    { artistId: 190, stageId: 9, day: 1, time: 600 },
    { artistId: 191, stageId: 9, day: 1, time: 700 },
    { artistId: 192, stageId: 9, day: 1, time: 800 },
    { artistId: 193, stageId: 9, day: 1, time: 900 },
    { artistId: 194, stageId: 9, day: 1, time: 1000 },
    { artistId: 195, stageId: 9, day: 2, time: 1200 },
    { artistId: 196, stageId: 9, day: 2, time: 100 },
    { artistId: 197, stageId: 9, day: 2, time: 200 },
    { artistId: 198, stageId: 9, day: 2, time: 300 },
    { artistId: 199, stageId: 9, day: 2, time: 400 },
    { artistId: 200, stageId: 9, day: 2, time: 500 },
    { artistId: 201, stageId: 9, day: 2, time: 600 },
    { artistId: 202, stageId: 9, day: 2, time: 700 },
    { artistId: 203, stageId: 9, day: 2, time: 800 },
    { artistId: 204, stageId: 9, day: 2, time: 900 },
    { artistId: 205, stageId: 9, day: 2, time: 1000 },
    { artistId: 206, stageId: 9, day: 2, time: 1100 },
    { artistId: 207, stageId: 9, day: 3, time: 1200 },
    { artistId: 208, stageId: 9, day: 3, time: 100 },
    { artistId: 209, stageId: 9, day: 3, time: 200 },
    { artistId: 210, stageId: 9, day: 3, time: 300 },
    { artistId: 211, stageId: 9, day: 3, time: 400 },
    { artistId: 212, stageId: 9, day: 3, time: 500 },
    { artistId: 213, stageId: 9, day: 3, time: 600 },
    { artistId: 214, stageId: 9, day: 3, time: 700 },
    { artistId: 215, stageId: 9, day: 3, time: 800 },
    { artistId: 216, stageId: 9, day: 3, time: 900 }
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
    getArtistStage: function (artistId) {
      var stage = null;
      this.artistStageMap.forEach(function (artistStageMap) {
        if(artistStageMap.artistId == artistId)
          stage = Umf.getStage(artistStageMap.stageId);
      });
      return stage;
    },
    showSchedulePane: function () {
      loadPage('/pages/schedule/schedule.html');
    },
    showLineupPane: function () {
      loadPage('/pages/lineup/lineup.html');
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
      if(!data.length || data !== '1.2') {
        var contentDialog = document.querySelector(".win-contentdialog").winControl;
        contentDialog.show();
        WinJS.Application.roaming.writeText('version', '1.2');
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
    });

    setScreenSizeClass();
    window.addEventListener('resize', setScreenSizeClass);

    new WinJS.UI._WinKeyboard(splitView.paneElement);
  });

  app.start();
}());