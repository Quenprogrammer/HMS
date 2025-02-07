import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
interface ProductPhoto {
  smallImage: string;
  largeImage: string;
}

interface RecommendedProduct {
  image: string;
  productName: string;
  productUrl: string;
}

interface Product {
  productName: string;
  productCategory: string;
  productDescription: string;
  productUrl: string;
  productPhotosUrls: ProductPhoto[];
  recommendedProducts: RecommendedProduct[];
}
@Component({
  selector: 'app-catgory',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './catgory.component.html',
  styleUrl: './catgory.component.scss'
})
export class CatgoryComponent implements OnInit {
  category: string = '';
  products: Product[] = [];
  selectedProduct: Product | null = null;
  allProducts: Product[] = [
    {
      "productName": "CT1201H Single Head Embroidery Machine",
      "productCategory": "Single Head Embroidery Machine",
      "productDescription": "MAIN FEATURE\n\n* EMB Area 400*600MM\n\n* Intelligent full color touch screen , slide mode for switching details, and the button will change as the sreen change.\n\n* 9 kinds of embroidery frame visualization options\n\n* U disk or network mode input\n\n* Supported batch model for pattern input, output  and delete\n\n* 600,000,000 stitches storage capacity , support up to 2000 patterns , and 250times color change\n\n* Perfect supported sequin embroidery , cording embroidery ,rhinestone hot fix and other special functional devices\n\n* PAD ,PC control the machine directly\n\n* Finished garment embroidery speed up to 1200rpm,cap embroidery 600rpm,support 15needles color change\n\n* Chinese,English,French,Spanish,Turkish,Portuguese,Russian,Arabic,Thai,Dutch,German,Italian,Vietnamese and other 13 kinds of language well supported\n\n* AC100-AC240V input Voltage adapted\n\n* 32V working power protect the operator safety.\n\n* Cap attachment device\n\n* T-shirt frames\n\n* Built in bobbion winder\n\n* Auto trimming \n\n* Auto color change",
      "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html",
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1201l-single-head-embroidery-machine-free25154228840.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25300766621.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1201l-single-head-embroidery-machine-free25300766621.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040902572064438.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040902572064438.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040903021788560.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040903021788560.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040902469249568.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040902469249568.jpg"
        }
      ],
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-1pd-single-head-embroidery-machine04380728175.jpg?size=150x0",
          "productName": "Single Head Flat+Taping mixed embroidery machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-1pd-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935491773493.jpg?size=150x0",
          "productName": "Rope Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/rope-embroidery-machine-color-different-sizes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201s-single-head-embroidery-machine34096011142.jpg?size=150x0",
          "productName": "Single Head Small Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201s-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923415272589.jpg?size=150x0",
          "productName": "CT906 Six Head Cap T-shirt Embroidery Machine Printi...",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct906-six-head-cap-t-shirt-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040944180948490.jpg?size=150x0",
          "productName": "Mixed Function Embroidery Machine Suitable for Flat ...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/mixed-function-embroidery-machine-is-suitable.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040945404897582.jpg?size=150x0",
          "productName": "Pearl Sewing Machine with Repair Bead Piece",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/pearl-sewing-machine-repair-repair-bead-piece.html"
        }
      ]
    },
    {

      "productName": "Big Embroidery Area High Speed Single Head Computerized Embroidery Machine With Beads And Sequin Device",
      "productCategory": "Single Head Embroidery Machine",
      "productDescription": "Big embroidery area high speed single head computerized  embroidery machine with beads and sequin device \n\nProduct Description\n\nSingle Head Embroidery Machine Description\n\n*EMB Area 500*1200MM\n*Intelligent full color touch screen , slide mode for switching details, and the button will change as the sreen change.\n* 9 kinds of embroidery frame visualization options\n* U disk or network mode input\n* supported batch model for pattern input, output and delete\n* 600,000,000 stitches storage capacity , support up to 2000 patterns , and 250times color change\n*Perfect supported sequin embroidery , cording embroidery ,rhinestone hot fix and other special functional devices\n*Finished garment embroidery speed up to 1200rpm,cap embroidery 600rpm,support 15needles color change\n*Chinese,English,French,Spanish,Turkish,Portuguese,Russian,Arabic,Thai,Dutch,German,Italian,Vietnamese and other 13 kinds of language well supported\n*AC100-AC240V input Voltage adapted\n*32V working power protect the operator safety.\n*Cap attachment device\n* T-shirt frames\n* Auto trimming \n* Auto color change\n\n\n\n\nHot Tags: big embroidery area high speed single head computerized embroidery machine with beads and sequin device, China, manufacturers, suppliers, factory, wholesale, price",
      "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/big-embroidery-area-high-speed-single-head.html",
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/big-embroidery-area-high-speed-single-head17048104757.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/big-embroidery-area-high-speed-single-head17048104757.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201912920/small/big-embroidery-area-high-speed-single-head23318298909.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201912920/big-embroidery-area-high-speed-single-head23318298909.jpg"
        }
      ],
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery20455029406.jpg?size=150x0",
          "productName": "CT1203H Three Head Cap T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1203h-three-head-cap-t-shirt-embroidery.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1202e-cap-embroidery-machine-letter08498432255.jpg?size=150x0",
          "productName": "Double Heads Cap Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202e-cap-embroidery-machine-letter.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937290742680.jpg?size=150x0",
          "productName": "Laser Embroidery Machine Cutting Marking",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/laser-embroidery-machine-cutting-marking.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923415272589.jpg?size=150x0",
          "productName": "CT906 Six Head Cap T-shirt Embroidery Machine Printi...",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct906-six-head-cap-t-shirt-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040941357476518.jpg?size=150x0",
          "productName": "Beaded Embroidery Machine Different Pattern Bag",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/beaded-embroidery-machine-different-pattern.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/201811061002040455989.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/201811061002040455989.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/computerized-single-head-embroidery-machine54211710139.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/computerized-single-head-embroidery-machine54211710139.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/computerized-single-head-embroidery-machine43013654667.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/computerized-single-head-embroidery-machine43013654667.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/computerized-single-head-embroidery-machine43013967117.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/computerized-single-head-embroidery-machine43013967117.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/computerized-single-head-embroidery-machine43011310843.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/computerized-single-head-embroidery-machine43011310843.jpg"
        }
      ],
      "productName": "Computerized Single Head Embroidery Machine",
      "productCategory": "Single Head Embroidery Machine",
      "productDescription": "Computerized Single Head Embroidery Machine\n\nBasic Info:\n\nModel : FT-CT1201H\n\nNeedle Number:Twelve/ Fifteen Needles\n\nEmbroidery Type: Towel Embroidery, Patch Embroidery, Clothing Embroidery, Hat Embroidery, Flat Embroidery, 3D Embroidery, Bag Embroidery, Belt Embroidery\n\nName : Single Head Home Computerized Embroidery Machine\n\nRotary Hook: Janpanese Koban Rotary Hook\n\nMotor: Servo Motor\n\nWarranty: 12 Months\n\nOperation Displaty: Computerized Smart Operation\n\nTransport Package: Wooden Package\n\nOrigin: China\n\nCondition: New\n\nAutomatic Grade: Automatic\n\nHead Number: Single\n\nControl System: Dahao Software System\n\nLanguage: 13 Languages\n\nPacking Size: 113*85*90 cm\n\nSpecification: 800*800*1550mm\n\nProduct Description\n\nModel\tHead\tColors\tEmb.Area\tSpeed\tControl Syetem\tFunction\nFT-CT1201H\tSingle\t12/15\t400*500mm\t1200rpm\tDahao system\t3D  Cap  TShirt  Flat Bag  Uniform Embrodiery etc.\n\n\n\n\n\n\n\n\n\n\nSingle Head Home Used Domestic Computerized Cap Embroidery Machine Multi Function Embroidery Machine \n\n\n\n\nBasic Configuration:\n\n1.  DAHAO original LCD computer monitor display\n\n2.  Main shaft motor: Panasonic/Dahao servo motor \n\n3.  Rotary hooks( Shuttle): Koban Rotary Hook Made In Japan\n\n4.  All best parts equipment\n\n5.  Pantagraph driveing motor: Panasonic/Dahao servo motor \n\n6.  Work speed: 1200RPM\n\n\n\n\nMain Feature\n\n1.One head embroidery machine with 12 or 15 needles\n\n2.Automatic thread trimmer\n\n3Maximum speed 1200 RPM\n\n4.270° Wide cap frame unit\n\n5. Touch screen display showing real time stitching\n\n6.USB input port\n\n7.Automatic color change\n\n8.Thread break detection\n\n9.Pre-sew design trace capable\n\n10.Memory size 20, 000, 000 stitches\n\n11.Emergency stop\n\n12.Electricity:110V/60Hz or 220V/50Hz available\n\n13.Low power consumption 100W to 150W\n\n\n\n\nNewest 10\" Dahao Computerized Control System With Touch Screen \n\nA.10\" touch screen showing real time stitching\n\nB.Manual, Semi-auto, Auto Color Change\n\nC.Function keys including Menu, Speed up and slow\n\nD.Multi languages available like English, French, Spanish etc.\n\nE.Frame-moving keys, Manual Trimming\n\nF .DOT ket to return to 100 degree\n\nG.Start, Stop, and emergency Stop\n\n\n\n\nHoops for the embroidery machine \n\nA.2 X Shirt Front Round Hoop 9 cm (3.5\")\n\nB.2 X Shirt Front Round Hoop 12 cm (4.7\")\n\nC.2 X Shirt Front Round Hoop 15 cm (5.9\")\n\nD.2 X Shirt Front Round Hoop 22 cm (9\")\n\nE.2 X Jacket Back Square Hoop 29X 29 cm (12\" X 12\")\n\nF.1 X Frame Hoop 51 X 37 cm (22\" X 15\")\n\nG.1X Square Aluminum Hoop  51 X 37 cm (22\" X 15\")\n\nCap attachment of each head\n\n1pc   cap driver,\n\n1pc   cap hoop station,\n\n2pcs  cap hoops\n\n\n\n\nOther parts included:      \n\nExtended table top for Flat embroidery, \n\nStanding table with Wheels ,\n\nTool Box, \n\n8GB USB driver, \n\nBobbin Winder And so on \n\n\n\n\nOther Free gifts :\n\n1) Woonden case   \n\n2) A whole set free easy damaged spare parts for your future replacement ,  \n\n3)  Free designs for testing your machine\n\n\n\n\n\n\n\nPacking detials: \n\n1) Package size :113*85*90cm \n\n\n\n\n2) Machine can be finished within 7--15 work days \n\n\n\n\n3) Can be shipping by sea /air \n\n\n\n\n4) Or DHL door to door \n\n\n\n\n5) Or customer come to pick up \n\n\n\n\n6) If you have a forwarder to arrange shipping,that is ok too \n\n\n\n\n\n\n\n\n\n\nAfter-sale Service & Feedbacks\n\n1 We provide one year warranty for all our machines,during this period ,if there was any problem about the machine ,we will send the spare parts to you for free and guide you how to solve the problme .If you still can not solve the problem .We will send our engineew to your side for help\n\n\n\n\n2 Our delivery time is within 15days after we receive the deposit ,if you have more than 2 sets machines or any order which is in hurry ,pls feel free to contact me ,then we can prepare for you ASAP.\n\n\n\n\n3,Our Technicist will trainning you after you recived the machine,and we have service department 24 hours for solving your problem in any time. Customer's satifaction is our ultimate goal.We gained the 100% good reputation from all clients.\n\n \n\nOur Advantages\n\n\n\n\n1.Considerate pre-sale service ,patient answer ,offer details of machine and shipping information .\n\n2.High quality ,import parts from janpan \n\n3.Quickly ship,when machine is in stock ,delivery 20 days .\n\n4.Comfortable price ,sincere partner .\n\n5.12months warranty ,flexile after-sale  service .\n\n\n\n\n\n\n\nWarly Tips:\n\n\n\n\nWe are factory directly sale.\n\nThe price is not a problem for our good starting cooperation \n\nFor our good starting, we will try best to offer you the best discount \n\nPlease first feel free details talking and video online checking\n\ncontact us :Rex 0086-18258536579\n\n\n\n\nHot Tags: computerized single head embroidery machine, China, manufacturers, suppliers, factory, wholesale, price",
      "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/computerized-single-head-embroidery-machine.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937290742680.jpg?size=150x0",
          "productName": "Laser Embroidery Machine Cutting Marking",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/laser-embroidery-machine-cutting-marking.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040933498526428.jpg?size=150x0",
          "productName": "Dribbling Embroidery Machine Lightweight Design Exqu...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/dribbling-embroidery-machine-lightweight.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040929100951977.jpg?size=150x0",
          "productName": "HFG924 High Speed Machine Quality Blackwork Guarante...",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/hfg924-high-speed-machine-quality-blackwork.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-single-head-embroidery-machine-high50233185831.jpg?size=150x0",
          "productName": "Single Head Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-single-head-embroidery-machine-high.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040907216393289.jpg?size=150x0",
          "productName": "CT1201xxl Single Head Embroidery Machine Design of L...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xxl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923415272589.jpg?size=150x0",
          "productName": "CT906 Six Head Cap T-shirt Embroidery Machine Printi...",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct906-six-head-cap-t-shirt-embroidery-machine.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-single-head-embroidery-machine-high50233185831.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/ct1201-single-head-embroidery-machine-high50233185831.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040900438510703.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040900438510703.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040900486967785.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040900486967785.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040900539220955.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040900539220955.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040900581169798.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040900581169798.jpg"
        }
      ],
      "productName": "Single Head Computerized Embroidery Machine",
      "productCategory": "Single Head Embroidery Machine",
      "productDescription": "Single Head  Computerized Embroidery Machine\n\nBasic Info:\n\nModel : FT-CT1201\n\nNeedle Number:Twelve/ Fifteen Needles\n\nEmbroidery Type: Towel Embroidery, Patch Embroidery, Clothing Embroidery, Hat Embroidery, Flat Embroidery, 3D Embroidery, Bag Embroidery, Belt Embroidery\n\nName : Single Head Home Computerized Embroidery Machine\n\nRotary Hook: Janpanese Koban Rotary Hook\n\nMotor: Servo Motor\n\nWarranty: 12 Months\n\nOperation Displaty: Computerized Smart Operation\n\nTransport Package: Wooden Package\n\nOrigin: China\n\nCondition: New\n\nAutomatic Grade: Automatic\n\nHead Number: Single\n\nControl System: Dahao Software System\n\nLanguage: 13 Languages\n\nPacking Size: 113*85*90 Cm\n\nSpecification: 800*800*1550mm\n\nProduct Description\n\nModel\tHead\tColors\tEmb.Area\tSpeed\tControl Syetem\tFunction\nFT-CT1201\tSIngle\t12/15\t510*360mm\t1200rpm\tDahao system\t3D  Cap  TShirt  Flat Bag  Uniform Embrodiery etc.\n\n\n\n\n\n\n\n\n\n\nSingle Head Home Used Domestic Computerized Cap Embroidery Machine Multi Function Flat Uniform Embroidery Machine \n\n\n\n\nBasic Configuration:\n\n1.  DAHAO original LCD computer monitor display\n\n2.  Main shaft motor: Panasonic/Dahao servo motor \n\n3.  Rotary hooks( Shuttle): Koban Rotary Hook Made In Japan\n\n4.  All best parts equipment\n\n5.  Pantagraph driveing motor: Panasonic/Dahao servo motor \n\n6.  Work speed: 1200RPM\n\n\n\n\nMain Feature\n\n1.One head embroidery machine with 12 or 15 needles\n\n2.Automatic thread trimmer\n\n3Maximum speed 1200 RPM\n\n4.270° Wide cap frame unit\n\n5.Touch screen display showing real time stitching\n\n6.USB input port\n\n7.Automatic color change\n\n8.Thread break detection\n\n9.Pre-sew design trace capable\n\n10.Memory size 20, 000, 000 stitches\n\n11.Emergency stop\n\n12.Electricity:110V/60Hz or 220V/50Hz available\n\n13.Low power consumption \n\n\n\n\nNewest 10\" Dahao Computerized Control System With Touch Screen \n\nA.10\" touch screen showing real time stitching\n\nB.Manual, Semi-auto, Auto Color Change\n\nC.Function keys including Menu, Speed up and slow\n\nD.Multi languages available like English, French, Spanish etc.\n\nE.Frame-moving keys, Manual Trimming\n\nF .DOT ket to return to 100 degree\n\nG.Start, Stop, and emergency Stop\n\n\n\n\nHoops for the embroidery machine \n\nA.2 X Shirt Front Round Hoop 9 cm (3.5\")\n\nB.2 X Shirt Front Round Hoop 12 cm (4.7\")\n\nC.2 X Shirt Front Round Hoop 15 cm (5.9\")\n\nD.2 X Shirt Front Round Hoop 22 cm (9\")\n\nE.2 X Jacket Back Square Hoop 29X 29 cm (12\" X 12\")\n\nF.1 X Frame Hoop 51 X 37 cm (22\" X 15\")\n\nG.1X Square Aluminum Hoop  51 X 37 cm (22\" X 15\")\n\nCap attachment of each head\n\n1pc   cap driver,\n\n1pc   cap hoop station,\n\n2pcs  cap hoops\n\n\n\n\nOther parts included:      \n\nExtended table top for Flat embroidery, \n\nStanding table with Wheels ,\n\nTool Box, \n\n8GB USB driver, \n\nBobbin Winder And so on \n\n\n\n\nOther Free gifts :\n\n1) Woonden case   \n\n2) A whole set free easy damaged spare parts for your future replacement ,  \n\n3) Free designs for testing your machine\n\n\n\n\n\n\n\nPacking detials: \n\n1) Package size :113*85*90cm \n\n\n\n\n2) Machine can be finished within 7--15 work days \n\n\n\n\n3) Can be shipping by sea /air \n\n\n\n\n4) Or DHL door to door \n\n\n\n\n5) Or customer come to pick up \n\n\n\n\n6) If you have a forwarder to arrange shipping,that is ok too \n\n\n\n\n\n\n\n\n\n\nAfter-sale Service & Feedbacks\n\n1 We provide one year warranty for all our machines,during this period ,if there was any problem about the machine ,we will send the spare parts to you for free and guide you how to solve the problme .If you still can not solve the problem .We will send our engineew to your side for help\n\n\n\n\n2 Our delivery time is within 15days after we receive the deposit ,if you have more than 2 sets machines or any order which is in hurry ,pls feel free to contact me ,then we can prepare for you ASAP.\n\n\n\n\n3,Our Technicist will trainning you after you recived the machine,and we have service department 24 hours for solving your problem in any time. Customer's satifaction is our ultimate goal.We gained the 100% good reputation from all clients.\n\n \n\nOur Advantages\n\n\n\n\n1.Considerate pre-sale service ,patient answer ,offer details of machine and shipping information .\n\n2.High quality ,import parts from janpan \n\n3.Quickly ship,when machine is in stock ,delivery 20 days .\n\n4.Comfortable price ,sincere partner .\n\n5.12months warranty ,flexile after-sale  service .\n\n\n\n\n\n\n\nWarly Tips:\n\n\n\n\nWe are factory directly sale.\n\nThe price is not a problem for our good starting cooperation \n\nFor our good starting, we will try best to offer you the best discount \n\nPlease first feel free details talking and video online checking\n\ncontact us :Rex 008618258536579\n\n\n",
      "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-single-head-embroidery-machine-high.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939202167908.jpg?size=150x0",
          "productName": "Computer Quilting Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/computer-quilting-embroidery-machine-best.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931469019743.jpg?size=150x0",
          "productName": "Sequins and Rope Embroidery Machine Combined With Di...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/sequins-and-rope-embroidery-machine-combined.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201xl-single-head-embroidery-machine26074882614.jpg?size=150x0",
          "productName": "CT1201XL Single Head Embroidery Machine Applique Let...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040907216393289.jpg?size=150x0",
          "productName": "CT1201xxl Single Head Embroidery Machine Design of L...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xxl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040941357476518.jpg?size=150x0",
          "productName": "Beaded Embroidery Machine Different Pattern Bag",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/beaded-embroidery-machine-different-pattern.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040945404897582.jpg?size=150x0",
          "productName": "Pearl Sewing Machine with Repair Bead Piece",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/pearl-sewing-machine-repair-repair-bead-piece.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201s-single-head-embroidery-machine34096011142.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/ct1201s-single-head-embroidery-machine34096011142.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201s-single-head-embroidery-machine04072016095.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/ct1201s-single-head-embroidery-machine04072016095.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040858033103219.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040858033103219.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201s-single-head-embroidery-machine05573682043.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/ct1201s-single-head-embroidery-machine05573682043.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040858131328723.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040858131328723.jpg"
        }
      ],
      "productName": "Single Head Small Computerized Embroidery Machine",
      "productCategory": "Single Head Embroidery Machine",
      "productDescription": "\n\n\nSingle Head Small Computerized Embroidery Machine\n\n\n\n\nMAIN FEATURE\n\n* EMB Area 300*350MM\n\n* Intelligent full color touch screen , slide mode for switching details, and the button will change as the sreen change.\n\n* 5 kinds of embroidery frame visualization options\n\n* U disk or network mode input\n\n* Supported batch model for pattern input, output  and delete\n\n* 600,000,000 stitches storage capacity , support up to 2000 patterns , and 250times color change\n\n* Perfect supported sequin embroidery , cording embroidery ,rhinestone hot fix and other special functional devices\n\n* PAD ,PC control the machine directly\n\n* Finished garment embroidery speed up to 1200rpm,cap embroidery 600rpm,support 15needles color change * Chinese,English,French,Spanish,Turkish,Portuguese,Russian,Arabic,Thai,Dutch,German,Italian,Vietnamese and other 13 kinds of language well supported\n\n* AC100-AC240V input Voltage adapted\n\n* 32V working power protect the operator safety.\n\n* Cap attachment device\n\n* T-shirt frames\n\n* Built in bobbion winder\n\n* Auto trimming \n\n* Auto color change\n\nModel\tHead\tColors\tEmb.Area\tSpeed\tFunction\nFT-CT1201S\tSIngle\t12/15\t300*350mm\t1200rpm\t3D  Cap  TShirt  Flat Bag  Uniform Embrodiery etc.\n\n\n\n\n\n\n\n\n\n\nOther parts included:      \nExtended table top for Flat embroidery, \nStanding table with Wheels ,\noperation Manual,\nTool Box, \n16GB USB driver, \nBobbin Winder And so on \n\nOther Free gifts :\n1) woonden case &vacuum package,  \n2) free digitziing software,   \n3) a whole set free easy damaged spare parts for your future replacement ,  \n4) 100 free designs for testing your machine\n\n\nPacking detials: \n1) Package size :70*60*90cm \n2) Machine can be finished within 7--15 work days \n3) Can be shipping by sea /air \n4) Or DHL door to door \n5) Or customer come to pick up \n\n6) If you have a forwarder to arrange shipping,that is ok .too \n\nSingle Head Home Used Domestic Computerized Cap Embroidery Machine Multi Function Flat Uniform Embroidery Machine \n\nAfter-sale Service & Feedbacks\n1 We provide one year warranty for all our machines,during this period ,if there was any problem about the machine ,we will send the spare parts to you for free and guide you how to solve the problme .If you still can not solve the problem .We will send our engineew to your side for help\n\n2 Our delivery time is within 15days after we receive the deposit ,if you have more than 2 sets machines or any order which is in hurry ,pls feel free to contact me ,then we can prepare for you ASAP.\n\n3 Our Technicist will trainning you after you recived the machine,and we have service department 24 hours for solving your problem in any time. Customer's satifaction is our ultimate goal.We gained the 100% good reputation from all clients.\n \nOur Advantages\n\n1.Considerate pre-sale service ,patient answer ,offer details of machine and shipping information .\n2.High quality ,import parts from janpan \n3.Quickly ship,when machine is in stock ,delivery in 7 days .\n4.Comfortable price ,sincere partner .\n5.18 months warranty ,flexile after-sale  service .\n\nWarly Tips:\n\nWe are factory directly sale.\nThe price is not a problem for our good starting cooperation \nFor our good starting, we will try best to offer you the best discount \nPlease first feel free details talking and video online checking\ncontact us : Rex  phone/whatsapp:0086-18258536579",
      "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201s-single-head-embroidery-machine.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery20455029406.jpg?size=150x0",
          "productName": "CT1203H Three Head Cap T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1203h-three-head-cap-t-shirt-embroidery.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-1pd-single-head-embroidery-machine04380728175.jpg?size=150x0",
          "productName": "Single Head Flat+Taping mixed embroidery machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-1pd-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937290742680.jpg?size=150x0",
          "productName": "Laser Embroidery Machine Cutting Marking",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/laser-embroidery-machine-cutting-marking.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040933498526428.jpg?size=150x0",
          "productName": "Dribbling Embroidery Machine Lightweight Design Exqu...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/dribbling-embroidery-machine-lightweight.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931469019743.jpg?size=150x0",
          "productName": "Sequins and Rope Embroidery Machine Combined With Di...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/sequins-and-rope-embroidery-machine-combined.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923415272589.jpg?size=150x0",
          "productName": "CT906 Six Head Cap T-shirt Embroidery Machine Printi...",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct906-six-head-cap-t-shirt-embroidery-machine.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201xl-single-head-embroidery-machine26074882614.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1201xl-single-head-embroidery-machine26074882614.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040905556389730.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040905556389730.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040906003499190.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040906003499190.jpg"
        }
      ],
      "productName": "CT1201XL Single Head Embroidery Machine Applique Letter Pattern Embroidery Monogramming",
      "productCategory": "Single Head Embroidery Machine",
      "productDescription": "MAIN FEATURE\n\n* EMB Area 500*800MM\n\n* Intelligent full color touch screen , slide mode for switching details, and the button will change as the sreen change.\n\n* 9 kinds of embroidery frame visualization options\n\n* U disk or network mode input\n\n* Supported batch model for pattern input, output  and delete\n\n* 600,000,000 stitches storage capacity , support up to 2000 patterns , and 250times color change\n\n* Perfect supported sequin embroidery , cording embroidery ,rhinestone hot fix and other special functional devices\n\n* PAD ,PC control the machine directly\n\n* Finished garment embroidery speed up to 1200rpm,cap embroidery 600rpm,support 15needles color change\n\n* Chinese,English,French,Spanish,Turkish,Portuguese,Russian,Arabic,Thai,Dutch,German,Italian,Vietnamese and other 13 kinds of language well supported\n\n* AC100-AC240V input Voltage adapted\n\n* 32V working power protect the operator safety.\n\n* Cap attachment device\n\n* T-shirt frames\n\n* Built in bobbion winder\n\n* Auto trimming \n\n* Auto color change\n\n\n",
      "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xl-single-head-embroidery-machine.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-1pd-single-head-embroidery-machine04380728175.jpg?size=150x0",
          "productName": "Single Head Flat+Taping mixed embroidery machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-1pd-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931469019743.jpg?size=150x0",
          "productName": "Sequins and Rope Embroidery Machine Combined With Di...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/sequins-and-rope-embroidery-machine-combined.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040929100951977.jpg?size=150x0",
          "productName": "HFG924 High Speed Machine Quality Blackwork Guarante...",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/hfg924-high-speed-machine-quality-blackwork.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040944180948490.jpg?size=150x0",
          "productName": "Mixed Function Embroidery Machine Suitable for Flat ...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/mixed-function-embroidery-machine-is-suitable.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040945404897582.jpg?size=150x0",
          "productName": "Pearl Sewing Machine with Repair Bead Piece",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/pearl-sewing-machine-repair-repair-bead-piece.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040910555635405.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040910555635405.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040912372688522.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040912372688522.jpg"
        }
      ],
      "productName": "601CT Single Head Embroidery Machine Using Digital Pattern",
      "productCategory": "Single Head Embroidery Machine",
      "productDescription": "MAIN FEATURE\n\n* EMB Area 350*510MM\n\n* DAHAO Intelligent full color screen , slide mode for switching details, and the button will change as the sreen change.\n\n* U disk \n\n* Supported batch model for pattern input, output  and delete\n\n* 600,000,000 stitches storage capacity , support up to 2000 patterns , and 250times color change\n\n* Perfect supported sequin embroidery , cording embroidery ,rhinestone hot fix and other special functional devices\n\n* PAD ,PC control the machine directly\n\n* Finished garment embroidery speed up to 1200rpm,cap embroidery 600rpm,support 15needles color change\n\n* Chinese,English,French,Spanish,Turkish,Portuguese,Russian,Arabic,Thai,Dutch,German,Italian,Vietnamese and other 13 kinds of language well supported\n\n* AC100-AC240V input Voltage adapted\n\n* 32V working power protect the operator safety.\n\n* Built in bobbion winder\n\n* Auto trimming \n\n* Auto color change\n\n\n\n\n\n",
      "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/601ct-single-head-embroidery-machine-using.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202h-double-head-cap-embroidery-machine22188659040.jpg?size=150x0",
          "productName": "CT1202H Two Head Cap Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202h-double-head-cap-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-1pd-single-head-embroidery-machine04380728175.jpg?size=150x0",
          "productName": "Single Head Flat+Taping mixed embroidery machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-1pd-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937290742680.jpg?size=150x0",
          "productName": "Laser Embroidery Machine Cutting Marking",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/laser-embroidery-machine-cutting-marking.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931469019743.jpg?size=150x0",
          "productName": "Sequins and Rope Embroidery Machine Combined With Di...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/sequins-and-rope-embroidery-machine-combined.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040907216393289.jpg?size=150x0",
          "productName": "CT1201xxl Single Head Embroidery Machine Design of L...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xxl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040945404897582.jpg?size=150x0",
          "productName": "Pearl Sewing Machine with Repair Bead Piece",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/pearl-sewing-machine-repair-repair-bead-piece.html"
        }
      ]
    },

    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202h-double-head-cap-embroidery-machine22188659040.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1202h-double-head-cap-embroidery-machine22188659040.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202h-double-head-cap-embroidery-machine23148575170.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1202h-double-head-cap-embroidery-machine23148575170.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202h-double-head-cap-embroidery-machine23149043549.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1202h-double-head-cap-embroidery-machine23149043549.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040917001435897.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040917001435897.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202h-double-head-cap-embroidery-machine23149512213.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1202h-double-head-cap-embroidery-machine23149512213.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040917084146513.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040917084146513.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202h-double-head-cap-embroidery-machine23149980932.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1202h-double-head-cap-embroidery-machine23149980932.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040917153595303.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040917153595303.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040917214021028.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040917214021028.jpg"
        }
      ],
      "productName": "CT1202H Two Head Cap Embroidery Machine",
      "productCategory": "Cap Embroidery Machine",
      "productDescription": "* Suitable for flat bed embroidery , cap embroidery and finish garments embroidery \n\n* EMB area 400*400mm\n\n* Speed :1000RPM\n\n* Fast change between finished garments frames and cap frames\n\n* Pattern auto ratation with 180 degree after change cap frame unit \n\n* 270 degree wide cap frame unit\n\n* Convenient power failure recovery embroidery function ,prevent embroidery half-way off cause misalignment \n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* Auto external thread winding device\n\n* 5 size t shirt frames\n\n* Cap attachment\n\n* Allmuin frame",
      "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202h-double-head-cap-embroidery-machine.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939202167908.jpg?size=150x0",
          "productName": "Computer Quilting Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/computer-quilting-embroidery-machine-best.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937290742680.jpg?size=150x0",
          "productName": "Laser Embroidery Machine Cutting Marking",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/laser-embroidery-machine-cutting-marking.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935491773493.jpg?size=150x0",
          "productName": "Rope Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/rope-embroidery-machine-color-different-sizes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201xl-single-head-embroidery-machine26074882614.jpg?size=150x0",
          "productName": "CT1201XL Single Head Embroidery Machine Applique Let...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040907216393289.jpg?size=150x0",
          "productName": "CT1201xxl Single Head Embroidery Machine Design of L...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xxl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040944180948490.jpg?size=150x0",
          "productName": "Mixed Function Embroidery Machine Suitable for Flat ...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/mixed-function-embroidery-machine-is-suitable.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery20455029406.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1203h-three-head-cap-t-shirt-embroidery20455029406.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery21013613539.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1203h-three-head-cap-t-shirt-embroidery21013613539.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery21209430506.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1203h-three-head-cap-t-shirt-embroidery21209430506.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923134469617.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040923134469617.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923196287963.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040923196287963.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923240178692.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040923240178692.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery21522336165.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1203h-three-head-cap-t-shirt-embroidery21522336165.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery21522804870.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1203h-three-head-cap-t-shirt-embroidery21522804870.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery21523329242.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1203h-three-head-cap-t-shirt-embroidery21523329242.jpg"
        }
      ],
      "productName": "CT1203H Three Head Cap T-Shirt Embroidery Machine",
      "productCategory": "Cap Embroidery Machine",
      "productDescription": "* Suitable for flat bed embroidery , cap embroidery and finish garments embroidery \n\n* EMB area 400*400mm\n\n* Speed :1000RPM\n\n* Fast change between finished garments frames and cap frames\n\n* Pattern auto ratation with 180 degree after change cap frame unit \n\n* 270 degree wide cap frame unit\n\n* Convenient power failure recovery embroidery  function ,prevent embroidery half-way off cause misalignment \n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* Auto external thread winding device\n\n* 5 size t shirt frames\n\n* Cap attachment\n\n* Allmuin frame",
      "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1203h-three-head-cap-t-shirt-embroidery.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040933498526428.jpg?size=150x0",
          "productName": "Dribbling Embroidery Machine Lightweight Design Exqu...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/dribbling-embroidery-machine-lightweight.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040927100416385.jpg?size=150x0",
          "productName": "EFG915 Flat Machine Embroidery Clothes Pattern Design",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/efg915-flat-machine-embroidery-clothes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1202-cap-embroidery-machine-letter50568505761.jpg?size=150x0",
          "productName": "High Speed Six Heads Cap/T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202-cap-embroidery-machine-letter.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201s-single-head-embroidery-machine34096011142.jpg?size=150x0",
          "productName": "Single Head Small Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201s-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040910555635405.jpg?size=150x0",
          "productName": "601CT Single Head Embroidery Machine Using Digital P...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/601ct-single-head-embroidery-machine-using.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040941357476518.jpg?size=150x0",
          "productName": "Beaded Embroidery Machine Different Pattern Bag",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/beaded-embroidery-machine-different-pattern.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/4-head-computerized-embroidery-machine35009586230.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/4-head-computerized-embroidery-machine35009586230.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/4-head-computerized-embroidery-machine35181477600.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/4-head-computerized-embroidery-machine35181477600.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/4-head-computerized-embroidery-machine35191643588.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/4-head-computerized-embroidery-machine35191643588.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/4-head-computerized-embroidery-machine35201191331.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/4-head-computerized-embroidery-machine35201191331.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/4-head-computerized-embroidery-machine35201660452.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/4-head-computerized-embroidery-machine35201660452.jpg"
        }
      ],
      "productName": "4 Head Computerized Embroidery Machine",
      "productCategory": "Cap Embroidery Machine",
      "productDescription": "4 Head  Computerized Embroidery Machine\n\nBasic Info:\n\nModel : FT-CT1204H\n\nNeedle Number: 12\n\nEmbroidery Type: Towel Embroidery, Patch Embroidery, Clothing Embroidery, Hat Embroidery, Flat Embroidery, 3D Embroidery, Bag Embroidery, Belt Embroidery\n\nName : 4 Head  Embroidery Machine\n\nRotary Hook: Janpanese Koban Rotary Hook\n\nMotor: Servo Motor\n\nWarranty: 12 Months\n\nOperation Displaty: Computerized Smart Operation\n\nTransport Package: Wooden Package\n\nOrigin: China\n\nCondition: New\n\nAutomatic Grade: Automatic\n\nHead Number: 4\n\nControl System: Dahao Software System\n\nLanguage: 13 Languages\n\nPacking Size: 193*110*110 Cm\n\n\n\n\nProduct Description\n\nModel\tHead\tColors\tEmb.Area\tSpeed\tControl Syetem\tFunction\nFT-CT1204H\t4\t12\t400*450mm\t1000rpm\tDahao system\t3D  Cap  TShirt  Flat Bag  Uniform Embrodiery etc.\n\n\n\n\n\n\n\n\n\n\n Cap Embroidery Machine Multi Function Flat Uniform Embroidery Machine \n\n\n\n\nBasic Configuration:\n\n1.  DAHAO original LCD computer monitor display\n\n2.  Main shaft motor: Panasonic/Dahao servo motor \n\n3.  Rotary hooks( Shuttle): Koban Rotary Hook Made In Japan\n\n4.  All best parts equipment\n\n5.  Pantagraph driveing motor: Panasonic/Dahao servo motor \n\n6.  Work speed: 1200RPM\n\n\n\n\nMain Feature\n\n1.One head embroidery machine with 12 needles\n\n2.Automatic thread trimmer\n\n3Maximum speed 1200 RPM\n\n4.270° Wide cap frame unit\n\n5.Touch screen display showing real time stitching\n\n6.USB input port\n\n7.Automatic color change\n\n8.Thread break detection\n\n9.Pre-sew design trace capable\n\n10.Memory size 20, 000, 000 stitches\n\n11.Emergency stop\n\n12.Electricity:110V/60Hz or 220V/50Hz available\n\n13.Low power consumption \n\n\n\n\nNewest 8\" Dahao Computerized Control System With Touch Screen \n\nA.8\"  screen showing real time stitching\n\nB.Manual, Semi-auto, Auto Color Change\n\nC.Function keys including Menu, Speed up and slow\n\nD.Multi languages available like English, French, Spanish etc.\n\nE.Frame-moving keys, Manual Trimming\n\nF .DOT ket to return to 100 degree\n\nG.Start, Stop, and emergency Stop\n\n\n\n\nHoops for the embroidery machine \n\nA.8X Shirt Front Round Hoop 9 cm (3.5\")\n\nB.8 X Shirt Front Round Hoop 12 cm (4.7\")\n\nC.8 X Shirt Front Round Hoop 15 cm (5.9\")\n\nD.8 X Shirt Front Round Hoop 22 cm (9\")\n\nE.8 X Jacket Back Square Hoop 29X 29 cm (12\" X 12\")\n\nG.1X Square Aluminum Hoop  320 X 45 cm \n\nCap attachment of each head\n\n4pc   cap driver,\n\n8pc   cap hoop station,\n\n1pcs  cap hoops\n\n\n\n\nOther parts included:      \n\nExtended table top for Flat embroidery, \n\nStanding table with Wheels ,\n\nTool Box, \n\n8GB USB driver, \n\nBobbin Winder And so on \n\n\n\n\nOther Free gifts :\n\n1) Woonden case   \n\n2) A whole set free easy damaged spare parts for your future replacement ,  \n\n3) Free designs for testing your machine\n\n\n\n\n\n\n\nPacking detials: \n\n1) Package size :193*110*110cm \n\n\n\n\n2) Machine can be finished within 7--15 work days \n\n\n\n\n3) Can be shipping by sea /air \n\n\n\n\n4) Or DHL door to door \n\n\n\n\n5) Or customer come to pick up \n\n\n\n\n6) If you have a forwarder to arrange shipping,that is ok too \n\n\n\n\n\n\n\n\n\n\nAfter-sale Service & Feedbacks\n\n1 We provide one year warranty for all our machines,during this period ,if there was any problem about the machine ,we will send the spare parts to you for free and guide you how to solve the problme .If you still can not solve the problem .We will send our engineew to your side for help\n\n\n\n\n2 Our delivery time is within 15days after we receive the deposit ,if you have more than 2 sets machines or any order which is in hurry ,pls feel free to contact me ,then we can prepare for you ASAP.\n\n\n\n\n3,Our Technicist will trainning you after you recived the machine,and we have service department 24 hours for solving your problem in any time. Customer's satifaction is our ultimate goal.We gained the 100% good reputation from all clients.\n\n \n\nOur Advantages\n\n\n\n\n1.Considerate pre-sale service ,patient answer ,offer details of machine and shipping information .\n\n2.High quality ,import parts from janpan \n\n3.Quickly ship,when machine is in stock ,delivery 20 days .\n\n4.Comfortable price ,sincere partner .\n\n5.12months warranty ,flexile after-sale  service .\n\n\n\n\n\n\n\nWarly Tips:\n\n\n\n\nWe are factory directly sale.\n\nThe price is not a problem for our good starting cooperation \n\nFor our good starting, we will try best to offer you the best discount \n\nPlease first feel free details talking and video online checking\n\ncontact us :Rex 008618258536579\n\n\n\n\nHot Tags: 4 head computerized embroidery machine, China, manufacturers, cap embroidery machine, tuber embroidery , t shirt embroidery machine",
      "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/4-head-computerized-embroidery-machine.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-1pd-single-head-embroidery-machine04380728175.jpg?size=150x0",
          "productName": "Single Head Flat+Taping mixed embroidery machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-1pd-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-single-head-embroidery-machine-high50233185831.jpg?size=150x0",
          "productName": "Single Head Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-single-head-embroidery-machine-high.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201s-single-head-embroidery-machine34096011142.jpg?size=150x0",
          "productName": "Single Head Small Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201s-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201xl-single-head-embroidery-machine26074882614.jpg?size=150x0",
          "productName": "CT1201XL Single Head Embroidery Machine Applique Let...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040910555635405.jpg?size=150x0",
          "productName": "601CT Single Head Embroidery Machine Using Digital P...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/601ct-single-head-embroidery-machine-using.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/12-head-computerized-embroidery-machine31149611455.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/12-head-computerized-embroidery-machine31149611455.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/12-head-computerized-embroidery-machine31343393295.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/12-head-computerized-embroidery-machine31343393295.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/12-head-computerized-embroidery-machine31493060644.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/12-head-computerized-embroidery-machine31493060644.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/12-head-computerized-embroidery-machine31498382285.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/12-head-computerized-embroidery-machine31498382285.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/12-head-computerized-embroidery-machine31505255337.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/12-head-computerized-embroidery-machine31505255337.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/12-head-computerized-embroidery-machine31509024118.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/12-head-computerized-embroidery-machine31509024118.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/12-head-computerized-embroidery-machine31513701238.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/12-head-computerized-embroidery-machine31513701238.jpg"
        }
      ],
      "productName": "12 Head Computerized Embroidery Machine",
      "productCategory": "Cap Embroidery Machine",
      "productDescription": "12 HeadS  Computerized Embroidery Machine\n\nBasic Info:\n\nModel : FT-TSECT1212\n\nNeedle Number:Twelve/ Fifteen Needles\n\nEmbroidery Type: Towel Embroidery, Patch Embroidery, Clothing Embroidery, Hat Embroidery, Flat Embroidery, 3D Embroidery, Bag Embroidery, Belt Embroidery\n\nName : Single Head Home Computerized Embroidery Machine\n\nRotary Hook: Janpanese Koban Rotary Hook\n\nMotor: Servo Motor\n\nWarranty: 12 Months\n\nOperation Displaty: Computerized Smart Operation\n\nTransport Package: Wooden Package\n\nOrigin: China\n\nCondition: New\n\nAutomatic Grade: Automatic\n\nHead Number: Single\n\nControl System: Dahao Software System\n\nLanguage: 13 Languages\n\nPacking Size: 113*85*90 Cm\n\nSpecification: 800*800*1550mm\n\nProduct Description\n\nModel\tHead\tColors\tEmb.Area\tSpeed\tControl Syetem\tFunction\nFT-ECT1212\t12\t12\t400*450mm\t1000rpm\tDahao system\t3D  Cap  TShirt  Flat Bag  Uniform Embrodiery etc.\n\n\n\n\n\n\n\n\n\n\n Computerized Cap Embroidery Machine Multi Function Flat Uniform Embroidery Machine \n\n\n\n\nBasic Configuration:\n\n1.  DAHAO original LCD computer monitor display\n\n2.  Main shaft motor: Panasonic/Dahao servo motor \n\n3.  Rotary hooks( Shuttle): Koban Rotary Hook Made In Japan\n\n4.  All best parts equipment\n\n5.  Pantagraph driveing motor: Panasonic/Dahao servo motor \n\n6.  Work speed: 1200RPM\n\n\n\n\nMain Feature\n\n1.One head embroidery machine with 12 or 15 needles\n\n2.Automatic thread trimmer\n\n3Maximum speed 1200 RPM\n\n4.270° Wide cap frame unit\n\n5.Touch screen display showing real time stitching\n\n6.USB input port\n\n7.Automatic color change\n\n8.Thread break detection\n\n9.Pre-sew design trace capable\n\n10.Memory size 20, 000, 000 stitches\n\n11.Emergency stop\n\n12.Electricity:110V/60Hz or 220V/50Hz available\n\n13.Low power consumption \n\n\n\n\nNewest 8\" Dahao Computerized Control System With Touch Screen \n\nA.8\"  screen showing real time stitching\n\nB.Manual, Semi-auto, Auto Color Change\n\nC.Function keys including Menu, Speed up and slow\n\nD.Multi languages available like English, French, Spanish etc.\n\nE.Frame-moving keys, Manual Trimming\n\nF .DOT ket to return to 100 degree\n\nG.Start, Stop, and emergency Stop\n\n\n\n\nHoops for the embroidery machine \n\nA.24 X Shirt Front Round Hoop 9 cm (3.5\")\n\nB.24X Shirt Front Round Hoop 12 cm (4.7\")\n\nC.24 X Shirt Front Round Hoop 15 cm (5.9\")\n\nD.24 X Shirt Front Round Hoop 22 cm (9\")\n\nE.24 X Jacket Back Square Hoop 29X 29 cm (12\" X 12\")\n\nG.1X Square Aluminum Hoop  480 X 45 cm \n\nCap attachment of each head\n\n12pc   cap driver,\n\n24pc   cap hoop station,\n\n1pcs  cap hoops\n\n\n\n\nOther parts included:      \n\nExtended table top for Flat embroidery, \n\nStanding table with Wheels ,\n\nTool Box, \n\n8GB USB driver, \n\nBobbin Winder And so on \n\n\n\n\nOther Free gifts :\n\n1) Woonden case   \n\n2) A whole set free easy damaged spare parts for your future replacement ,  \n\n3) Free designs for testing your machine\n\n\n\n\n\n\n\nPacking detials: \n\n1) Package size :600*140*130cm \n\n\n\n\n2) Machine can be finished within 25 work days \n\n\n\n\n3) Can be shipping by sea /air \n\n\n\n\n4) Or DHL door to door \n\n\n\n\n5) Or customer come to pick up \n\n\n\n\n6) If you have a forwarder to arrange shipping,that is ok too \n\n\n\n\n\n\n\n\n\n\nAfter-sale Service & Feedbacks\n\n1 We provide one year warranty for all our machines,during this period ,if there was any problem about the machine ,we will send the spare parts to you for free and guide you how to solve the problme .If you still can not solve the problem .We will send our engineew to your side for help\n\n\n\n\n2 Our delivery time is within 15days after we receive the deposit ,if you have more than 2 sets machines or any order which is in hurry ,pls feel free to contact me ,then we can prepare for you ASAP.\n\n\n\n\n3,Our Technicist will trainning you after you recived the machine,and we have service department 24 hours for solving your problem in any time. Customer's satifaction is our ultimate goal.We gained the 100% good reputation from all clients.\n\n \n\nOur Advantages\n\n\n\n\n1.Considerate pre-sale service ,patient answer ,offer details of machine and shipping information .\n\n2.High quality ,import parts from janpan \n\n3.Quickly ship,when machine is in stock ,delivery 20 days .\n\n4.Comfortable price ,sincere partner .\n\n5.12months warranty ,flexile after-sale  service .\n\n\n\n\n\n\n\nWarly Tips:\n\n\n\n\nWe are factory directly sale.\n\nThe price is not a problem for our good starting cooperation \n\nFor our good starting, we will try best to offer you the best discount \n\nPlease first feel free details talking and video online checking\n\ncontact us :Rex 008618258536579\n\n\n\n\nHot Tags: 12 head computerized embroidery machine, China, manufacturers, suppliers, factory, wholesale, price",
      "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/12-head-computerized-embroidery-machine.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/201811061002040455989.jpg?size=150x0",
          "productName": "Computerized Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/computerized-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201s-single-head-embroidery-machine34096011142.jpg?size=150x0",
          "productName": "Single Head Small Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201s-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201xl-single-head-embroidery-machine26074882614.jpg?size=150x0",
          "productName": "CT1201XL Single Head Embroidery Machine Applique Let...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040907216393289.jpg?size=150x0",
          "productName": "CT1201xxl Single Head Embroidery Machine Design of L...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xxl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040910555635405.jpg?size=150x0",
          "productName": "601CT Single Head Embroidery Machine Using Digital P...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/601ct-single-head-embroidery-machine-using.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/eight-head-computerized-embroidery-machine27371036652.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/eight-head-computerized-embroidery-machine27371036652.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/eight-head-computerized-embroidery-machine28015795860.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/eight-head-computerized-embroidery-machine28015795860.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/eight-head-computerized-embroidery-machine28030164971.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/eight-head-computerized-embroidery-machine28030164971.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/eight-head-computerized-embroidery-machine28193185596.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/eight-head-computerized-embroidery-machine28193185596.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/eight-head-computerized-embroidery-machine28202670239.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/eight-head-computerized-embroidery-machine28202670239.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/eight-head-computerized-embroidery-machine28203402406.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/eight-head-computerized-embroidery-machine28203402406.jpg"
        }
      ],
      "productName": "Eight Head Computerized Embroidery Machine",
      "productCategory": "Cap Embroidery Machine",
      "productDescription": "8 Head  Computerized Embroidery Machine\n\nBasic Info:\n\nModel : FT-ECT1208\n\nNeedle Number:Twelve/ Fifteen Needles\n\nEmbroidery Type: Towel Embroidery, Patch Embroidery, Clothing Embroidery, Hat Embroidery, Flat Embroidery, 3D Embroidery, Bag Embroidery, Belt Embroidery\n\nName : Single Head Home Computerized Embroidery Machine\n\nRotary Hook: Janpanese Koban Rotary Hook\n\nMotor: Servo Motor\n\nWarranty: 12 Months\n\nOperation Displaty: Computerized Smart Operation\n\nTransport Package: Wooden Package\n\nOrigin: China\n\nCondition: New\n\nAutomatic Grade: Automatic\n\nHead Number: 8\n\nControl System: Dahao Software System\n\nLanguage: 13 Languages\n\nPacking Size: 420*110*150 Cm\n\nProduct Description\n\nModel\tHead\tColors\tEmb.Area\tSpeed\tControl Syetem\tFunction\nFT-ECT1208\t8\t12\t400*450mm\t1000rpm\tDahao system\t3D  Cap  TShirt  Flat Bag  Uniform Embrodiery etc.\n\n\n\n\n\n\n\n\n\n\n Cap Embroidery Machine Multi Function Flat Uniform Embroidery Machine \n\n\n\n\nBasic Configuration:\n\n1.  DAHAO original LCD computer monitor display\n\n2.  Main shaft motor: Panasonic/Dahao servo motor \n\n3.  Rotary hooks( Shuttle): Koban Rotary Hook Made In Japan\n\n4.  All best parts equipment\n\n5.  Pantagraph driveing motor: Panasonic/Dahao servo motor \n\n6.  Work speed: 1200RPM\n\n\n\n\nMain Feature\n\n1.One head embroidery machine with 12 or 15 needles\n\n2.Automatic thread trimmer\n\n3Maximum speed 1200 RPM\n\n4.270° Wide cap frame unit\n\n5.Touch screen display showing real time stitching\n\n6.USB input port\n\n7.Automatic color change\n\n8.Thread break detection\n\n9.Pre-sew design trace capable\n\n10.Memory size 20, 000, 000 stitches\n\n11.Emergency stop\n\n12.Electricity:110V/60Hz or 220V/50Hz available\n\n13.Low power consumption \n\n\n\n\nNewest 8\" Dahao Computerized Control System With Touch Screen \n\nA.8\"  screen showing real time stitching\n\nB.Manual, Semi-auto, Auto Color Change\n\nC.Function keys including Menu, Speed up and slow\n\nD.Multi languages available like English, French, Spanish etc.\n\nE.Frame-moving keys, Manual Trimming\n\nF .DOT ket to return to 100 degree\n\nG.Start, Stop, and emergency Stop\n\n\n\n\nHoops for the embroidery machine \n\nA.16 X Shirt Front Round Hoop 9 cm (3.5\")\n\nB.16 X Shirt Front Round Hoop 12 cm (4.7\")\n\nC.16 X Shirt Front Round Hoop 15 cm (5.9\")\n\nD.16 X Shirt Front Round Hoop 22 cm (9\")\n\nE.16 X Jacket Back Square Hoop 29X 29 cm (12\" X 12\")\n\nG.1X Square Aluminum Hoop  320 X 45 cm \n\nCap attachment of each head\n\n8pc   cap driver,\n\n1pc   cap hoop station,\n\n16pcs  cap hoops\n\n\n\n\nOther parts included:      \n\nExtended table top for Flat embroidery, \n\nStanding table with Wheels ,\n\nTool Box, \n\n8GB USB driver, \n\nBobbin Winder And so on \n\n\n\n\nOther Free gifts :\n\n1) Woonden case   \n\n2) A whole set free easy damaged spare parts for your future replacement ,  \n\n3) Free designs for testing your machine\n\n\n\n\n\n\n\nPacking detials: \n\n1) Package size :420*130*150cm \n\n\n\n\n2) Machine can be finished within 7--15 work days \n\n\n\n\n3) Can be shipping by sea /air \n\n\n\n\n4) Or DHL door to door \n\n\n\n\n5) Or customer come to pick up \n\n\n\n\n6) If you have a forwarder to arrange shipping,that is ok too \n\n\n\n\n\n\n\n\n\n\nAfter-sale Service & Feedbacks\n\n1 We provide one year warranty for all our machines,during this period ,if there was any problem about the machine ,we will send the spare parts to you for free and guide you how to solve the problme .If you still can not solve the problem .We will send our engineew to your side for help\n\n\n\n\n2 Our delivery time is within 15days after we receive the deposit ,if you have more than 2 sets machines or any order which is in hurry ,pls feel free to contact me ,then we can prepare for you ASAP.\n\n\n\n\n3,Our Technicist will trainning you after you recived the machine,and we have service department 24 hours for solving your problem in any time. Customer's satifaction is our ultimate goal.We gained the 100% good reputation from all clients.\n\n \n\nOur Advantages\n\n\n\n\n1.Considerate pre-sale service ,patient answer ,offer details of machine and shipping information .\n\n2.High quality ,import parts from janpan \n\n3.Quickly ship,when machine is in stock ,delivery 20 days .\n\n4.Comfortable price ,sincere partner .\n\n5.12months warranty ,flexile after-sale  service .\n\n\n\n\n\n\n\nWarly Tips:\n\n\n\n\nWe are factory directly sale.\n\nThe price is not a problem for our good starting cooperation \n\nFor our good starting, we will try best to offer you the best discount \n\nPlease first feel free details talking and video online checking\n\ncontact us :Rex 008618258536579\n\n\n\n\nHot Tags: eight head computerized embroidery machine, China, manufacturers, suppliers, factory, wholesale, price",
      "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/eight-head-computerized-embroidery-machine.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-1pd-single-head-embroidery-machine04380728175.jpg?size=150x0",
          "productName": "Single Head Flat+Taping mixed embroidery machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-1pd-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/big-embroidery-area-high-speed-single-head17048104757.jpg?size=150x0",
          "productName": "Big Embroidery Area High Speed Single Head Computeri...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/big-embroidery-area-high-speed-single-head.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201s-single-head-embroidery-machine34096011142.jpg?size=150x0",
          "productName": "Single Head Small Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201s-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201xl-single-head-embroidery-machine26074882614.jpg?size=150x0",
          "productName": "CT1201XL Single Head Embroidery Machine Applique Let...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040910555635405.jpg?size=150x0",
          "productName": "601CT Single Head Embroidery Machine Using Digital P...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/601ct-single-head-embroidery-machine-using.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/high-speed-double-heads-tubular-embroidery03118565058.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/high-speed-double-heads-tubular-embroidery03118565058.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/high-speed-double-heads-tubular-embroidery17013402866.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/high-speed-double-heads-tubular-embroidery17013402866.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/high-speed-double-heads-tubular-embroidery17126270163.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/high-speed-double-heads-tubular-embroidery17126270163.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/high-speed-double-heads-tubular-embroidery17234871799.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/high-speed-double-heads-tubular-embroidery17234871799.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/high-speed-double-heads-tubular-embroidery17528634818.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/high-speed-double-heads-tubular-embroidery17528634818.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/high-speed-double-heads-tubular-embroidery19088297013.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/high-speed-double-heads-tubular-embroidery19088297013.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/high-speed-double-heads-tubular-embroidery19476989351.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/high-speed-double-heads-tubular-embroidery19476989351.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/high-speed-double-heads-tubular-embroidery19477458443.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/high-speed-double-heads-tubular-embroidery19477458443.jpg"
        }
      ],
      "productName": "High Speed Double Heads Tubular Embroidery Machine",
      "productCategory": "Cap Embroidery Machine",
      "productDescription": "High Speed Double Heads Tubular Embroidery Machine\n\nBasic Info\n\nModel: FT-CT1202H\n\nCondition: New\n\nMain Motor:DAHAO SERVO\n\nXy Motor: Stepper Motor\n\nLanguage: Support 13 Languages\n\nPower: 100V/60Hz - 240V/50Hz\n\nCap Embroidery: Yes\n\nPackaging: Wooden Package\n\nTransport Package: Wooden Package\n\nOrigin: China\n\nCertification: CE, ISO9001: 2000\n\nComputer: 10\" Touch Screen Computer\n\nWarranty: 24Months\n\nHead: 2 \n\n\n1.The introduction of Embroidery Machine\nMulti -function computerized embroidery machine, both domestic and commercial,covers with unique embroidery patterns and logo, realizing the personalized identification customization and much better clothes designs. It has been the personal customized tools for entrepreneurs. \n\n2.MAIN FEATURE\n\nA.Suitable for flat embroidery, cap embroidery and finished garments embroidery                                                         \nB.Free changing between finished garments frame ang cap frame\nC.270° wide cap frame unit \nD. Maximum speed 1200 RPM \nE. Color LCD display showing real time stitching \nF. USB input port with fast data transmission and good compatibility \nG. Auto star and color change,200times color change setted \nH. Thread break detection \nI. Pre-sew design trace capable \nJ. Memory size 2, 000, 000 stitches \nK. Emergency stop ,Prevent accidents\nL. Keeping current data or work when emergency stop or power off \nM. Mending function. (back and skip stitches under controller) \nN. Mainboard intergated into control panel protecting from dust or external force. \n\n\n3.LCD TOUCH SCREEN COMPUTER\n\n10\" High Definition color LCD display and touch screen showing real time,stitching simple HCI and operation mode Muti language supported,it includes Chinese,English,Russian,Dutch,Spanish,Portuguese,Turkish,German,Arabic,Thai,Vietnamese.Main interface monitor machine condition any time.Quick manual trimming,color changing and main shaft inching operation.\n  \n\n4. Hoops/frames inclued\nA. 4 x Shirt Front Round Hoop 9 cm (3.5\")\n\nB. 4 x Shirt Front Round Hoop 12 cm (4.7\")\n\nC. 4 x Shirt Front Round Hoop 15 cm (5.9\")\n\n\nD. 4 x Shirt Front Round Hoop 22 cm (8.7\")\n\n\nE. 4 x Jacket Back Square Hoop 29 x29cm (12\"x 12\")                                                           \n\nF. 1 x Sash Frame 56 x 38 cm (22\" x 15\")\n\nCap Attachment Included\n\n2pc   cap driver,\n1pc   cap hoop station,\n4pcs  cap hoops\n\n\nOptional Devices\n\nPacking and Delivery\n\nDelivery term: Production takes around 10 days, ship within 7-10days after receiving 100% payment \nPayment term: 30% TT advance payment before production, 70% TT remaining balance before shipping.\n\n\nOur Service\n\n\n1.Warranty:24months for whole machine, 36 months free upgrade for control system.\n2.Train1 or 2 engineers for customer for free ,but the traveling expenses (tickets for arrive and depart) should on customer;\n3.During the warranty period, such as machine failure is a quality problem ,free maintenance.\n4.The service does not include human or environmental factors, customers fault and supplies section\n5.All charge should be taken by customers for on-the-spot service after exceeding warranty period.\n\nFAQ Hot Questions        \n\nQ: Is this a trustable long-term strategic partner?\n\nA: Just ask our customers, view our company profile, assessment of capability, factory glimpse, and the honor we had. And why not contact us or pay a visit to us?\n\nQ: What service will I get with this buying?\n\nA: Simply at your service: available consultancy before sales, easy communication during sales, easy payment term, smooth and safe delivery of guaranteed quality, and assured timely services after sales.\n\nQ: What kind of embroidery work and embroidery machine do I need?\n\nA: Think: ready-made garment/cap/hat, or garment before sewing, or just flat fabric?\n\nNormal flat stitch, or special chenille/chain/loop stitch, or sequin/paillette, or cord/tape/ribbon to add value to your embroidery?\n\nQ: How many heads do I need and what embroidery area on each head?\n\nA: Think: how big is your factory and how much is your expected production?\n\nThe embroidery area on each head depends on the maximum area of your embroidery design to run.\n\nQ: How many stitches do I get per minute (RPM) on each head?\n\nA: High speed model gives max. 1200RPM,\n\nNormal speed model gives max. 1000SPM,\n\nLower speed model gives max.850SPM.\n\nQ: Do I need the elite model or economy model?\n\nA: Think: How much would you pay for a machine? What we offer is what you need!\n\nQ: Can I represent and sell order machines in my market?\n\nA: Welcome to join us and grow to be a strong distributor.\n\n \n\n \n\nAbout us\n\n \n\nCHINA FORTUNE GROUP Co., Ltd., is an advanced Scientific and Technological Manufacturer with R & D, manufacturing and sales. Lactated in high-tech enterprise gathering Park, High-tech Industrial Park, ZHUJI.\n\nFORTUNE  insists exploration, innovation and sustained value creation concept, providing top quality products and perfect service from production& processing solutions to comprehensive pre-sales, sales, after-sales support and services for customers all over the world         \n\n\n\n\nHot Tags: high speed double heads tubular embroidery machine, China, manufacturers, suppliers, factory, wholesale, price",
      "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/high-speed-double-heads-tubular-embroidery.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937290742680.jpg?size=150x0",
          "productName": "Laser Embroidery Machine Cutting Marking",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/laser-embroidery-machine-cutting-marking.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040929100951977.jpg?size=150x0",
          "productName": "HFG924 High Speed Machine Quality Blackwork Guarante...",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/hfg924-high-speed-machine-quality-blackwork.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-single-head-embroidery-machine-high50233185831.jpg?size=150x0",
          "productName": "Single Head Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-single-head-embroidery-machine-high.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923415272589.jpg?size=150x0",
          "productName": "CT906 Six Head Cap T-shirt Embroidery Machine Printi...",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct906-six-head-cap-t-shirt-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040944180948490.jpg?size=150x0",
          "productName": "Mixed Function Embroidery Machine Suitable for Flat ...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/mixed-function-embroidery-machine-is-suitable.html"
        }
      ]
    },
    {
      "productPhotosUrls": [],
      "productName": "Double Heads Cap Embroidery Machine",
      "productCategory": "Cap Embroidery Machine",
      "productDescription": "* Suitable for flat bed embroidery , cap embroidery and finish garments embroidery \n\n* EMB area 400*450mm\n\n* Speed :1000RPM\n\n* Fast change between finished garments frames and cap frames\n\n* Pattern auto ratation with 180 degree after change cap frame unit \n\n* 270 degree wide cap frame unit\n\n* Convenient power failure recovery embroidery function ,prevent embroidery half-way off cause misalignment \n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* Auto external thread winding device\n\n* 5 size t shirt frames\n\n* Cap attachment\n\n* Allmuin frame\n\n\n\n\nHot Tags: double heads cap embroidery machine, China, manufacturers, suppliers, factory, wholesale, price",
      "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202e-cap-embroidery-machine-letter.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-1pd-single-head-embroidery-machine04380728175.jpg?size=150x0",
          "productName": "Single Head Flat+Taping mixed embroidery machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-1pd-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937290742680.jpg?size=150x0",
          "productName": "Laser Embroidery Machine Cutting Marking",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/laser-embroidery-machine-cutting-marking.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-single-head-embroidery-machine-high50233185831.jpg?size=150x0",
          "productName": "Single Head Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-single-head-embroidery-machine-high.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201s-single-head-embroidery-machine34096011142.jpg?size=150x0",
          "productName": "Single Head Small Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201s-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040944180948490.jpg?size=150x0",
          "productName": "Mixed Function Embroidery Machine Suitable for Flat ...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/mixed-function-embroidery-machine-is-suitable.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/ct1202-cap-embroidery-machine-letter50568505761.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/ct1202-cap-embroidery-machine-letter50568505761.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040914361452751.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040914361452751.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040914410986721.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040914410986721.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040914530806367.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040914530806367.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202-cap-embroidery-machine-letter24049206853.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1202-cap-embroidery-machine-letter24049206853.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202-cap-embroidery-machine-letter24049675743.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1202-cap-embroidery-machine-letter24049675743.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202-cap-embroidery-machine-letter24050144325.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/202012920/ct1202-cap-embroidery-machine-letter24050144325.jpg"
        }
      ],
      "productName": "High Speed Six Heads Cap/T-Shirt Embroidery Machine",
      "productCategory": "Cap Embroidery Machine",
      "productDescription": "\n\n\nBasic Info\n\n \n\nModel: FT-ECT1206\n\nCondition: New\n\nXy Motor: Servo Motor\n\nMain Motor: Servo Motor\n\nLanguage: Support 12 Languages\n\nPower: 100V/60Hz - 240V/50Hz\n\nCap Embroidery: Yes\n\nPackaging: Wooden Package\n\nTransport Package: Wooden Package\n\nOrigin: China\n\nCertification: CE, ISO9001: 2000\n\nComputer: DAHAO 528 Computer\n\n\nWarranty: 24Months\n\nHead: 6 \n\n\n1.The introduction of Embroidery Machine\nMulti -function computerized embroidery machine, both domestic and commercial,covers with unique embroidery patterns and logo, realizing the personalized identification customization and much better clothes designs. It has been the personal customized tools for entrepreneurs. \n\n2.MAIN FEATURE\n\nA.Suitable for flat embroidery, cap embroidery and finished garments embroidery                                                         \nB.Free changing between finished garments frame ang cap frame\nC.270° wide cap frame unit \nD. Maximum speed 1200 RPM \nE. Color LCD display showing real time stitching \nF. USB input port with fast data transmission and good compatibility \nG. Auto star and color change,200times color change setted \nH. Thread break detection \nI. Pre-sew design trace capable \nJ. Memory size 2, 000, 000 stitches \nK. Emergency stop ,Prevent accidents\nL. Keeping current data or work when emergency stop or power off \nM. Mending function. (back and skip stitches under controller) \nN. Mainboard intergated into control panel protecting from dust or external force. \n\n\n3.DAHAO 528 COMPUTER\n\nHigh Definition color LCD display  showing real time,stitching simple HCI and operation mode .Muti language supported,it includes Chinese,English,Russian,Dutch,Spanish,Portuguese,Turkish,German,Arabic,Thai,Vietnamese.Main interface monitor machine condition any time.Quick manual trimming,color changing and main shaft inching operation.\n\n  \n\n4. Hoops/frames inclued\nA. 12x Shirt Front Round Hoop 9 cm (3.5\")\nB. 12 x Shirt Front Round Hoop 12 cm (4.7\")\nC. 12 x Shirt Front Round Hoop 15 cm (5.9\")\nD. 12x Shirt Front Round Hoop 22 cm (8.7\")\nE. 12x Jacket Back Square Hoop 29 x29cm (12\"x 12\")                                                          \n\nCap Attachment Included\n\n6pc   cap driver,\n1pc   cap hoop station,\n12pcs  cap hoops\n\n\nOptional Devices\n\nPacking and Delivery\n\nDelivery term: Production takes around 10 days, ship within 7-10days after receiving 100% payment \nPayment term: 30% TT advance payment before production, 70% TT remaining balance before shipping.\n\n\nOur Service\n\n\n1.Warranty:24months for whole machine, 36 months free upgrade for control system.\n2.Train1 or 2 engineers for customer for free ,but the traveling expenses (tickets for arrive and depart) should on customer;\n3.During the warranty period, such as machine failure is a quality problem ,free maintenance.\n4.The service does not include human or environmental factors, customers fault and supplies section\n5.All charge should be taken by customers for on-the-spot service after exceeding warranty period.\n\nFAQ Hot Questions        \n\nQ: Is this a trustable long-term strategic partner?\n\nA: Just ask our customers, view our company profile, assessment of capability, factory glimpse, and the honor we had. And why not contact us or pay a visit to us?\n\nQ: What service will I get with this buying?\n\nA: Simply at your service: available consultancy before sales, easy communication during sales, easy payment term, smooth and safe delivery of guaranteed quality, and assured timely services after sales.\n\nQ: What kind of embroidery work and embroidery machine do I need?\n\nA: Think: ready-made garment/cap/hat, or garment before sewing, or just flat fabric?\n\nNormal flat stitch, or special chenille/chain/loop stitch, or sequin/paillette, or cord/tape/ribbon to add value to your embroidery?\n\nQ: How many heads do I need and what embroidery area on each head?\n\nA: Think: how big is your factory and how much is your expected production?\n\nThe embroidery area on each head depends on the maximum area of your embroidery design to run.\n\nQ: How many stitches do I get per minute (RPM) on each head?\n\nA: High speed model gives max. 1200RPM,\n\nNormal speed model gives max. 1000SPM,\n\nLower speed model gives max.850SPM.\n\nQ: Do I need the elite model or economy model?\n\nA: Think: How much would you pay for a machine? What we offer is what you need!\n\nQ: Can I represent and sell order machines in my market?\n\nA: Welcome to join us and grow to be a strong distributor.\n\n \n\n \n\nAbout us\n\n \n\nCHINA FORTUNE GROUP Co., Ltd., is an advanced Scientific and Technological Manufacturer with R & D, manufacturing and sales. Lactated in high-tech enterprise gathering Park, High-tech Industrial Park, ZHUJI.\n\nFORTUNE  insists exploration, innovation and sustained value creation concept, providing top quality products and perfect service from production& processing solutions to comprehensive pre-sales, sales, after-sales support and services for customers all over the world         \n\n\n",
      "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202-cap-embroidery-machine-letter.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery20455029406.jpg?size=150x0",
          "productName": "CT1203H Three Head Cap T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1203h-three-head-cap-t-shirt-embroidery.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-1pd-single-head-embroidery-machine04380728175.jpg?size=150x0",
          "productName": "Single Head Flat+Taping mixed embroidery machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-1pd-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040933498526428.jpg?size=150x0",
          "productName": "Dribbling Embroidery Machine Lightweight Design Exqu...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/dribbling-embroidery-machine-lightweight.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923415272589.jpg?size=150x0",
          "productName": "CT906 Six Head Cap T-shirt Embroidery Machine Printi...",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct906-six-head-cap-t-shirt-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040945404897582.jpg?size=150x0",
          "productName": "Pearl Sewing Machine with Repair Bead Piece",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/pearl-sewing-machine-repair-repair-bead-piece.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923415272589.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040923415272589.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040926024877941.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040926024877941.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040926089241018.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040926089241018.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040926137849291.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040926137849291.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040926207888603.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040926207888603.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040926256270188.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040926256270188.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040926302443245.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040926302443245.jpg"
        }
      ],
      "productName": "CT906 Six Head Cap T-Shirt Embroidery Machine Printing Professional Custom",
      "productCategory": "Cap Embroidery Machine",
      "productDescription": "* Suitable for flat bed embroidery , cap embroidery and finish garments embroidery \n\n* EMB area 400*450mm\n\n* Speed :850RPM\n\n* Fast change between finished garments frames and cap frames\n\n* Pattern auto ratation with 180 degree after change cap frame unit \n\n* 270 degree wide cap frame unit\n\n* Convenient power failure recovery embroidery  function ,prevent embroidery half-way off cause misalignment \n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* Auto external thread winding device\n\n* 5 size t shirt frames\n\n* Cap attachment\n\n* Allmuin frame\n\n\n\n\nMODEL\n\n\t\n\nHEADS\n\n\t\n\nNEEDLES\n\n\t\n\nWEIGHT\n\n\t\n\nPACKING SIZE\n\n\n\n\nCT904/1204/1504\n\n\t\n\n4\n\n\t\n\n9/12/15\n\n\t\n\n800kgs\n\n\t\n\n260*100*130cm\n\n\n\n\nCT906/1206/1506\n\n\t\n\n6\n\n\t\n\n9/12/15\n\n\t\n\n1000kgs\n\n\t\n\n350*100*130cm\n\n\n\n\nCT908/1208\n\n\t\n\n8\n\n\t\n\n9/12\n\n\t\n\n1200kgs\n\n\t\n\n430*100*130cm\n\n\n\n\nCT910/1210\n\n\t\n\n10\n\n\t\n\n9/12\n\n\t\n\n1500kgs\n\n\t\n\n510*110*130cm\n\n\n\n\nCT912/1212\n\n\t\n\n12\n\n\t\n\n9/12\n\n\t\n\n2000kgs\n\n\t\n\n590*120*130cm",
      "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct906-six-head-cap-t-shirt-embroidery-machine.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery20455029406.jpg?size=150x0",
          "productName": "CT1203H Three Head Cap T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1203h-three-head-cap-t-shirt-embroidery.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939202167908.jpg?size=150x0",
          "productName": "Computer Quilting Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/computer-quilting-embroidery-machine-best.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935491773493.jpg?size=150x0",
          "productName": "Rope Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/rope-embroidery-machine-color-different-sizes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040933498526428.jpg?size=150x0",
          "productName": "Dribbling Embroidery Machine Lightweight Design Exqu...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/dribbling-embroidery-machine-lightweight.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040941357476518.jpg?size=150x0",
          "productName": "Beaded Embroidery Machine Different Pattern Bag",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/beaded-embroidery-machine-different-pattern.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040929100951977.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040929100951977.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040930500074466.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040930500074466.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040930549347615.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040930549347615.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040930595012388.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040930595012388.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931045718556.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040931045718556.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931106817181.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040931106817181.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931170736604.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040931170736604.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931218886359.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040931218886359.jpg"
        }
      ],
      "productName": "HFG924 High Speed Machine Quality Blackwork Guarantee Bunka Pattern Embroidery",
      "productCategory": "Flat Embroidery Machine",
      "productDescription": "* Suitable for flat bed embroidery \n\n* EMB area (decide by clients)\n\n* Speed :1200RPM\n\n* Dahao A19 computer with 12inch LCD\n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* XY Servo motor \n\n* Japanese hooks\n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* 5 size t shirt frames\n\n\n",
      "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/hfg924-high-speed-machine-quality-blackwork.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202h-double-head-cap-embroidery-machine22188659040.jpg?size=150x0",
          "productName": "CT1202H Two Head Cap Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202h-double-head-cap-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-1pd-single-head-embroidery-machine04380728175.jpg?size=150x0",
          "productName": "Single Head Flat+Taping mixed embroidery machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-1pd-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1202-cap-embroidery-machine-letter50568505761.jpg?size=150x0",
          "productName": "High Speed Six Heads Cap/T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202-cap-embroidery-machine-letter.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201s-single-head-embroidery-machine34096011142.jpg?size=150x0",
          "productName": "Single Head Small Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201s-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201xl-single-head-embroidery-machine26074882614.jpg?size=150x0",
          "productName": "CT1201XL Single Head Embroidery Machine Applique Let...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040910555635405.jpg?size=150x0",
          "productName": "601CT Single Head Embroidery Machine Using Digital P...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/601ct-single-head-embroidery-machine-using.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040927100416385.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040927100416385.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040928346320903.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040928346320903.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040928398750752.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040928398750752.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040928444298769.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040928444298769.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040928491190265.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040928491190265.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040928535838325.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040928535838325.jpg"
        }
      ],
      "productName": "EFG915 Flat Machine Embroidery Clothes Pattern Design",
      "productCategory": "Flat Embroidery Machine",
      "productDescription": "* Suitable for flat bed embroidery \n\n* EMB area (decide by clients)\n\n* Speed :1000RPM\n\n* Dahao 528 computer with 8inch LCD\n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* XY Servo motor \n\n* Japanese hooks\n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* 5 size t shirt frames\n\n\n",
      "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/efg915-flat-machine-embroidery-clothes.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939202167908.jpg?size=150x0",
          "productName": "Computer Quilting Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/computer-quilting-embroidery-machine-best.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040929100951977.jpg?size=150x0",
          "productName": "HFG924 High Speed Machine Quality Blackwork Guarante...",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/hfg924-high-speed-machine-quality-blackwork.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1202-cap-embroidery-machine-letter50568505761.jpg?size=150x0",
          "productName": "High Speed Six Heads Cap/T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202-cap-embroidery-machine-letter.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-single-head-embroidery-machine-high50233185831.jpg?size=150x0",
          "productName": "Single Head Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-single-head-embroidery-machine-high.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040907216393289.jpg?size=150x0",
          "productName": "CT1201xxl Single Head Embroidery Machine Design of L...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xxl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040910555635405.jpg?size=150x0",
          "productName": "601CT Single Head Embroidery Machine Using Digital P...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/601ct-single-head-embroidery-machine-using.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/four-heads-computerized-embroidery-machine201812061528528107145.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/four-heads-computerized-embroidery-machine201812061528528107145.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/four-heads-computerized-embroidery-machine41534736434.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/four-heads-computerized-embroidery-machine41534736434.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/four-heads-computerized-embroidery-machine41535361652.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/four-heads-computerized-embroidery-machine41535361652.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201812920/small/four-heads-computerized-embroidery-machine41535986695.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201812920/four-heads-computerized-embroidery-machine41535986695.jpg"
        }
      ],
      "productName": "Four Heads Computerized Embroidery Machine",
      "productCategory": "Flat Embroidery Machine",
      "productDescription": "Basic Info\n\n1) Needle: 9/12, Head: 4\n\n2) Head distance: 400mm \n\n3)Embroidery area: 400x800mm\n\n4) Motor: Dahao servo motor\n\n5) Monitor: Dahao 5 Inch color monitor, with USB port.\n\n6) With/without cutter\n\n7) Speed: 850-1000 rpm\n\n\n\n\nWe can make any model machinery according to customers requirement.\n\nOur company embroidery machine have passed ISO 9001: 2000 and CE Certificate.\n\nWe're an embroidery machine manfacturer over 10 years,if you want more information,please contact me!\n\n\n\n\nPacking:vacuum packing,or wooden packing ,according to your needs.\n\n\n\n\nDelivery:15 days after receipt the deposit.\n\n\n\n\n \n\nAccording to your requests to make the machines.\n\n\n\n\nGive you latest news of your making machines.\n\n\n\n\nAfter-sale service,machine's operation,maintain,spare parts' replace,etc\n\n\n\n\nWe promise the competitive price but the best quality.\n\n\n\n\n100% New Spare parts of machine,and never use mixed old or used parts.\n\n\n\n\nMore than 10 years of OEM service,the machine,packing,logo customized \n\n\n\n\nsevice will be provided for you.\n\n\n\n\nPre-sale consultation service,parts and tenchnical support.\n\n\n\n\nHot Tags: four heads computerized embroidery machine, China, manufacturers, suppliers, factory, wholesale, price",
      "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/four-heads-computerized-embroidery-machine.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery20455029406.jpg?size=150x0",
          "productName": "CT1203H Three Head Cap T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1203h-three-head-cap-t-shirt-embroidery.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-1pd-single-head-embroidery-machine04380728175.jpg?size=150x0",
          "productName": "Single Head Flat+Taping mixed embroidery machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-1pd-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/201811061002040455989.jpg?size=150x0",
          "productName": "Computerized Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/computerized-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935491773493.jpg?size=150x0",
          "productName": "Rope Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/rope-embroidery-machine-color-different-sizes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-single-head-embroidery-machine-high50233185831.jpg?size=150x0",
          "productName": "Single Head Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-single-head-embroidery-machine-high.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939202167908.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040939202167908.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040940571077683.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040940571077683.jpg"
        }
      ],
      "productName": "Computer Quilting Embroidery Machine",
      "productCategory": "Mixed Embroidery Machine",
      "productDescription": "* Suitable for quilting \n\n* EMB area 50.5mm\n\n* Speed :750RPM\n\n* Dahao yida C19 computer with10inch LCD\n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* XY Servo motor \n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* 5 size t shirt frames",
      "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/computer-quilting-embroidery-machine-best.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery20455029406.jpg?size=150x0",
          "productName": "CT1203H Three Head Cap T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1203h-three-head-cap-t-shirt-embroidery.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040933498526428.jpg?size=150x0",
          "productName": "Dribbling Embroidery Machine Lightweight Design Exqu...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/dribbling-embroidery-machine-lightweight.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931469019743.jpg?size=150x0",
          "productName": "Sequins and Rope Embroidery Machine Combined With Di...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/sequins-and-rope-embroidery-machine-combined.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040929100951977.jpg?size=150x0",
          "productName": "HFG924 High Speed Machine Quality Blackwork Guarante...",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/hfg924-high-speed-machine-quality-blackwork.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040927100416385.jpg?size=150x0",
          "productName": "EFG915 Flat Machine Embroidery Clothes Pattern Design",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/efg915-flat-machine-embroidery-clothes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923415272589.jpg?size=150x0",
          "productName": "CT906 Six Head Cap T-shirt Embroidery Machine Printi...",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct906-six-head-cap-t-shirt-embroidery-machine.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937290742680.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040937290742680.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939084489860.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040939084489860.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939134958891.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040939134958891.jpg"
        }
      ],
      "productName": "Laser Embroidery Machine Cutting Marking",
      "productCategory": "Mixed Embroidery Machine",
      "productDescription": "* Suitable for flat and laser cut\n\n* EMB area (decide by clients)\n\n* Speed :1000RPM\n\n* Dahao C19 computer with10inch LCD\n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* XY Servo motor \n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* 5 size t shirt frames\n\n\n",
      "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/laser-embroidery-machine-cutting-marking.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery20455029406.jpg?size=150x0",
          "productName": "CT1203H Three Head Cap T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1203h-three-head-cap-t-shirt-embroidery.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935491773493.jpg?size=150x0",
          "productName": "Rope Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/rope-embroidery-machine-color-different-sizes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931469019743.jpg?size=150x0",
          "productName": "Sequins and Rope Embroidery Machine Combined With Di...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/sequins-and-rope-embroidery-machine-combined.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040927100416385.jpg?size=150x0",
          "productName": "EFG915 Flat Machine Embroidery Clothes Pattern Design",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/efg915-flat-machine-embroidery-clothes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201xl-single-head-embroidery-machine26074882614.jpg?size=150x0",
          "productName": "CT1201XL Single Head Embroidery Machine Applique Let...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923415272589.jpg?size=150x0",
          "productName": "CT906 Six Head Cap T-shirt Embroidery Machine Printi...",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct906-six-head-cap-t-shirt-embroidery-machine.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935491773493.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040935491773493.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937150959991.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040937150959991.jpg"
        }
      ],
      "productName": "Rope Embroidery Machine",
      "productCategory": "Mixed Embroidery Machine",
      "productDescription": "* Suitable for CHENILLE STITCHES\n\n* EMB area (decide by clients)\n\n* Speed :1000RPM\n\n* Dahao C19computer with10inch LCD\n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* XY Servo motor \n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* 5 size t shirt frames",
      "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/rope-embroidery-machine-color-different-sizes.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939202167908.jpg?size=150x0",
          "productName": "Computer Quilting Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/computer-quilting-embroidery-machine-best.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937290742680.jpg?size=150x0",
          "productName": "Laser Embroidery Machine Cutting Marking",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/laser-embroidery-machine-cutting-marking.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040929100951977.jpg?size=150x0",
          "productName": "HFG924 High Speed Machine Quality Blackwork Guarante...",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/hfg924-high-speed-machine-quality-blackwork.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040907216393289.jpg?size=150x0",
          "productName": "CT1201xxl Single Head Embroidery Machine Design of L...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xxl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040941357476518.jpg?size=150x0",
          "productName": "Beaded Embroidery Machine Different Pattern Bag",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/beaded-embroidery-machine-different-pattern.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040944180948490.jpg?size=150x0",
          "productName": "Mixed Function Embroidery Machine Suitable for Flat ...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/mixed-function-embroidery-machine-is-suitable.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040933498526428.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040933498526428.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935129471159.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040935129471159.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935183057359.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040935183057359.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935226093779.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040935226093779.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935275444966.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040935275444966.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935328567551.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040935328567551.jpg"
        }
      ],
      "productName": "Dribbling Embroidery Machine Lightweight Design Exquisite Pattern Quilt",
      "productCategory": "Mixed Embroidery Machine",
      "productDescription": "* Suitable for flat bed embroidery ,TAPING embroidery \n\n* EMB area (decide by clients)\n\n* Speed :850RPM\n\n* Dahao 528 computer with 8inch LCD\n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* XY Servo motor \n\n* Japanese hooks\n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* 5 size t shirt frames\n\n\n",
      "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/dribbling-embroidery-machine-lightweight.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202h-double-head-cap-embroidery-machine22188659040.jpg?size=150x0",
          "productName": "CT1202H Two Head Cap Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202h-double-head-cap-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939202167908.jpg?size=150x0",
          "productName": "Computer Quilting Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/computer-quilting-embroidery-machine-best.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935491773493.jpg?size=150x0",
          "productName": "Rope Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/rope-embroidery-machine-color-different-sizes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-single-head-embroidery-machine-high50233185831.jpg?size=150x0",
          "productName": "Single Head Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-single-head-embroidery-machine-high.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040907216393289.jpg?size=150x0",
          "productName": "CT1201xxl Single Head Embroidery Machine Design of L...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xxl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040945404897582.jpg?size=150x0",
          "productName": "Pearl Sewing Machine with Repair Bead Piece",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/pearl-sewing-machine-repair-repair-bead-piece.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931469019743.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040931469019743.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040933073601262.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040933073601262.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040933120844339.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040933120844339.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040933170158029.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040933170158029.jpg"
        }
      ],
      "productName": "Sequins And Rope Embroidery Machine Combined With Different Patterns",
      "productCategory": "Mixed Embroidery Machine",
      "productDescription": "* Suitable for flat bed embroidery ,sequins and cording embroidery \n\n* EMB area (decide by clients)\n\n* Speed :850RPM\n\n* Dahao 528 computer with 8inch LCD\n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* XY Servo motor \n\n* Japanese hooks\n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* 5 size t shirt frames\n\n\n",
      "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/sequins-and-rope-embroidery-machine-combined.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1202h-double-head-cap-embroidery-machine22188659040.jpg?size=150x0",
          "productName": "CT1202H Two Head Cap Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202h-double-head-cap-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1203h-three-head-cap-t-shirt-embroidery20455029406.jpg?size=150x0",
          "productName": "CT1203H Three Head Cap T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1203h-three-head-cap-t-shirt-embroidery.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1202-cap-embroidery-machine-letter50568505761.jpg?size=150x0",
          "productName": "High Speed Six Heads Cap/T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202-cap-embroidery-machine-letter.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040910555635405.jpg?size=150x0",
          "productName": "601CT Single Head Embroidery Machine Using Digital P...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/601ct-single-head-embroidery-machine-using.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040941357476518.jpg?size=150x0",
          "productName": "Beaded Embroidery Machine Different Pattern Bag",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/beaded-embroidery-machine-different-pattern.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040944180948490.jpg?size=150x0",
          "productName": "Mixed Function Embroidery Machine Suitable for Flat ...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/mixed-function-embroidery-machine-is-suitable.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040941357476518.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040941357476518.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040943182105662.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040943182105662.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040943247983101.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040943247983101.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040943297098076.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040943297098076.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040943369790572.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040943369790572.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040943542949380.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040943542949380.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040943598525446.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040943598525446.jpg"
        }
      ],
      "productName": "Beaded Embroidery Machine Different Pattern Bag",
      "productCategory": "Mixed Embroidery Machine",
      "productDescription": "* Suitable for flat and beads\n\n* EMB area (decide by clients)\n\n* Speed: 1000RPM\n\n* Dahao C19 computer with10inch LCD\n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* XY Servo motor \n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* 5 size t shirt frames\n\n\n",
      "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/beaded-embroidery-machine-different-pattern.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939202167908.jpg?size=150x0",
          "productName": "Computer Quilting Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/computer-quilting-embroidery-machine-best.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040937290742680.jpg?size=150x0",
          "productName": "Laser Embroidery Machine Cutting Marking",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/laser-embroidery-machine-cutting-marking.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040929100951977.jpg?size=150x0",
          "productName": "HFG924 High Speed Machine Quality Blackwork Guarante...",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/hfg924-high-speed-machine-quality-blackwork.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1202-cap-embroidery-machine-letter50568505761.jpg?size=150x0",
          "productName": "High Speed Six Heads Cap/T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202-cap-embroidery-machine-letter.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040907216393289.jpg?size=150x0",
          "productName": "CT1201xxl Single Head Embroidery Machine Design of L...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xxl-single-head-embroidery-machine.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040923415272589.jpg?size=150x0",
          "productName": "CT906 Six Head Cap T-shirt Embroidery Machine Printi...",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct906-six-head-cap-t-shirt-embroidery-machine.html"
        }
      ]
    },
    {
      "productPhotosUrls": [],
      "productName": "Mixed Function Embroidery Machine Suitable For Flat And Chenille Sequins Dribbling",
      "productCategory": "Mixed Embroidery Machine",
      "productDescription": "* Suitable for flat and sequins, cording , taping , chenille , beads, lasers\n\n* EMB area (decide by clients)\n\n* Speed :1000RPM\n\n* Dahao D19 computer with 10inch LCD\n\n* LCD dispaly showing real time stitching\n\n* Full screen pre-view design trace capable\n\n* XY Servo motor \n\n* Auto start and color change max 200times color change supported\n\n* Thread break detection and prevention\n\n* Wide voltage AC80-260V input , adapt to any unstable electricity environment\n\n* The machine adopt Dc36V power switch eminently safe\n\n* 5 size t shirt frames\n\n\n",
      "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/mixed-function-embroidery-machine-is-suitable.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/202012920/small/ct1201l-single-head-embroidery-machine-free25154228840.jpg?size=150x0",
          "productName": "CT1201H Single Head Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201l-single-head-embroidery-machine-free.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935491773493.jpg?size=150x0",
          "productName": "Rope Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/rope-embroidery-machine-color-different-sizes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040931469019743.jpg?size=150x0",
          "productName": "Sequins and Rope Embroidery Machine Combined With Di...",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/sequins-and-rope-embroidery-machine-combined.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040929100951977.jpg?size=150x0",
          "productName": "HFG924 High Speed Machine Quality Blackwork Guarante...",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/hfg924-high-speed-machine-quality-blackwork.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040927100416385.jpg?size=150x0",
          "productName": "EFG915 Flat Machine Embroidery Clothes Pattern Design",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/efg915-flat-machine-embroidery-clothes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040907216393289.jpg?size=150x0",
          "productName": "CT1201xxl Single Head Embroidery Machine Design of L...",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201xxl-single-head-embroidery-machine.html"
        }
      ]
    },
    {
      "productPhotosUrls": [
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040945404897582.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040945404897582.jpg"
        },
        {
          "smallImage": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040948292590984.jpg",
          "largeImage": "http://www.fortune-machinery.com/uploads/201712920/p201705040948292590984.jpg"
        }
      ],
      "productName": "Pearl Sewing Machine With Repair Bead Piece",
      "productCategory": "Mixed Embroidery Machine",
      "productDescription": "FUNCTION：fix the pearl on fabrice",
      "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/pearl-sewing-machine-repair-repair-bead-piece.html",
      "recommendedProducts": [
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040939202167908.jpg?size=150x0",
          "productName": "Computer Quilting Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/computer-quilting-embroidery-machine-best.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040935491773493.jpg?size=150x0",
          "productName": "Rope Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/mixed-embroidery-machine/rope-embroidery-machine-color-different-sizes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040929100951977.jpg?size=150x0",
          "productName": "HFG924 High Speed Machine Quality Blackwork Guarante...",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/hfg924-high-speed-machine-quality-blackwork.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201712920/small/p201705040927100416385.jpg?size=150x0",
          "productName": "EFG915 Flat Machine Embroidery Clothes Pattern Design",
          "productUrl": "http://www.fortune-machinery.com/flat-embroidery-machine/efg915-flat-machine-embroidery-clothes.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1202-cap-embroidery-machine-letter50568505761.jpg?size=150x0",
          "productName": "High Speed Six Heads Cap/T-shirt Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/cap-embroidery-machine/ct1202-cap-embroidery-machine-letter.html"
        },
        {
          "image": "http://www.fortune-machinery.com/uploads/201812920/small/ct1201-single-head-embroidery-machine-high50233185831.jpg?size=150x0",
          "productName": "Single Head Computerized Embroidery Machine",
          "productUrl": "http://www.fortune-machinery.com/single-head-embroidery-machine/ct1201-single-head-embroidery-machine-high.html"
        }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    // Simulate category filter
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.products = this.allProducts.filter(product => product.productCategory === this.category);
    });
  }

  openModal(product: Product) {
    console.log('Product selected:', product); // Debugging line
    this.selectedProduct = product;
  }

}
