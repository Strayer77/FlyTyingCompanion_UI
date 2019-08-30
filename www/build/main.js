webpackJsonp([1],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fly-details/fly-details.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fly_service_fly_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let HomePage = class HomePage {
    //------------------------------------------------------------------------------------
    constructor(navCtrl, flyService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.flyService = flyService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        //------------------------------------------------------------------------------------
        //variables for flies after they've been grabbed from database 
        this.flies = [];
        this.headMats = [];
        this.beadMats = [];
        this.threadMats = [];
        this.bodyMats = [];
        this.tailMats = [];
        this.wingMats = [];
        this.legMats = [];
        this.flyImageURL = "/assets/imgs/FlyPictures/";
        //------------------------------------------------------------------------------------
        //sets up our formgroup with variables from homepage to collect materials
        //submitted in form
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            headMats: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            beadMats: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            threadMats: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            bodyMats: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            tailMats: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            wingMats: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            legMats: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
        //------------------------------------------------------------------------------------
        //material arrays that are loaded into the ion select options on the home.html page
        //can't find way to export from other file at the moment--
        this.Head = ["Brown Hackle", "Silver Gray Thread", "Brown Deer Hair", "Orange Thread", "Tan Thread", "Red Thread", "Black Deer Hair", "Peacock Herl", "Green Foam Rubber", "Brown Foam Rubber", "Black-Dyed Deer Hair", "Deer Hair", "Olive-Dyed Deer Hair", "Bright Green-Dyed Deer Hair", "Mint Green-Dyed Deer Hair", "Brown-Dyed Deer Hair", "Gray Foam Rubber", "Brown Thread", "Black Foam Rubber", "Black Laminated Foam Rubber", "Tan Foam Rubber", "Olive Thread", "Green Thread", "Clear Epoxy", "Black Epoxy", "Dark Synthetic Arizona Peacock", "Epoxy", "Black Marabou", "Olive Marabou", "White Thread", "Brown Wool", "Black Moose Hair", "Clear Antron", "Olive Antron", "Red Rayon Floss", "Black Paxton Dubbing", "Chocolate Paxton Dubbing", "Yellow Condor Quills", "Melted Monofilament", "Black Plastic Beads", "Plastic Beads", "Black Foam", "Waterproof Pen", "White Plastic", "Jungle Cock Eyes", "Orange Plastic", "Yellow Irises", "White Irises", "Black Foam Plastic", "Olive Foam Plastic", "White Foam Plastic", "Black And White Paint", "Black Pupils", "Bean Bag Beans", "Orange Plastic", "Black Paint", "Monofilament", "Nickel", "Tungsten Metallic Red", "Nickel Plated Tungsten",];
        this.Bead = ["Brass Dumbells", "Gold", "Red Glass", "Fine Black Rubber", "Copper", "Black", "Black Tungsten", "Fluorescent Orange Luminous Tungstens", "Black-Painted Tungsten", "Gold-Plated Tungsten", "Copper-Plated Tungsten", "Gold Plated Tungsten", "Nickel-Plated Tungsten", "Metallic Blue Tungsten", "Metallic Rainbow Tungsten", "Metallic Red Tungsten", "Metallic Pink Anodized Tungsten", "Silver-Plated Tungsten", "Copper-Plated 4.0 Millimetre Tungsten", "Luminous Tungsten", "Gold-Plated 4.0 Millimetre Tungsten", "Fluoroescent Orange Tungsten", "Fluoroescent Pink Tungsten", "Luminous Painted Tungsten", "Fluorescent Pink Painted Tungsten", "Fluorescent Orange Tungsten"];
        this.Thread = ["Flat Waxed Nylon", "Flymaster 6/0 Black", "Waxed Monocord 3/0 Black", "Unwaxed Flymaster 6/0 Gray", "Brown 3/0 Monocord", "Flymaster 6/0 White", "Flymaster 6/0 Green", "Flymaster 6/0 Dark Olive", "Flymaster 6/0 Tan", "Flymaster 6/0 Orange", "Flymaster 6/0 Red", "Waxed Monocord 3/0 Brown", "Green Flat Waxed Nylon", "Tan Flat Waxed Nylon", "Flymaster 6/0 Brown", "Black Flat Waxed Nylon", "Red Flymaster Plus 140 Denier Unwaxed", "Red Flat Waxed Nylon", "Brown Flymaster Plus 140 Denier Unwaxed", "Black 3/0 Monocord", "Olive 3/0 Monocord", "White 3/0 Monocord", "Green 3/0 Monocord", "White Flat Waxed Nylon", "Olive Flat Waxed Nylon", "Gray 3/0", "Red 3/0 Monocord", "Flymaster 6/0 Olive", "Flymaster 6/0 Gray", "Flymaster 6/0 Chartreuse", "Flymaster 6/0 Gold", "Black Tubular Nylon", "Flymaster 6/0 Black Unwaxed", "Flymaster 6/0 Red Unwaxed"];
        this.Body = ["Gray Wool", "Blue Floss", "Amber Antron", "Black Rabbit Fur", "Metallic Dark Blue Tinsel", "Black Quill", "Olive Polypropylene", "Olive Floss", "Green Floss", "Red Floss", "Yellow Floss", "Trimmed Deer Hair", "Moose Mane", "Light Quill", "Deer Hair Fibers", "Dark Quill", "Dun Antron", "Brown Antron", "Dark Tan Foam Rubber", "Olive Brown Wool", "Beige Antron", "Olive Wool", "Crimson Ultra Chenille", "Blue Polyester Cord", "Brown Polypropylene", "Tan Polypropylene", "Black Floss", "Trimmed Brown Deer Hair", "Orange Antron", "Tan Antron", "Danville Black Color 1 Rayon Chenille", "Danville Brown Color 73 Rayon Chenille", "Danville Yellow Color Rayon Chenille", "Danville Green Color 62 Rayon Chenille", "Aurora Skirt Luminous Plastic Strip", "Danville Redrayon Chenille", "Black Wool", "Red Wool", "Green Wool", "Brown Floss", "Danville Yellow Color 3 Rayon Chenille", "Danville Fluoroescent Green Nylon Chenille", "Danville Peach Color 101 Rayon Chenille", "Danville Burnt Orang Color 12 Rayon Chenille", "Danville Burnt Orange Color 12 Rayon Chenille", "Danville Olive Color 60 Rayon Chenille", " Danville Fluoro Green Color 504  Flame Color 505 Nylon Chenille", " Danville Kelly Green Color 62  Red Color 5 Rayon Chenille", " Danville Light Olive Color 61  Red Color 5 Rayon Chenille", "Danville Kelly Green Color 62 Rayon Chenille", " Danville Red Color 56  Olive Color 60 Rayon Chenille", "Danville Red Color 5 Rayon Chenille", "Orange Rayon Chenille", "Pearl Mylar Tinsel", "Danville Black Color 100 Rayon Chenille", "Danville Insect Green Color 67 Rayon Chenille", "Danville Light Olive Color 61 Rayon Chenille", "Danville Dark Brown Color 73 Rayon Chenille", "Purple Estaz Tinsel Chenille", "Green Pearl Mylar Tubing", "Pearl Ice Chenille", "Dyed Olive Rabbit Fur", "Flat Silver Tinsel", "Luminous Aurora Skirt", "Dark Green Ice Chenille", "Pearl U V Mylar Tinsel", "Black Ice Chenille", "Olive Ice Chenille", "Flat Gold Tinsel", "Hollow Braided Mylar Tubing", "Danville Olive  Color 60 Rayon Chenille", "Mud Brown Antron", "Wide Pearl Tinsel", "Wide Light Blue Pearl Tinsel", "Claret Antron", "Wide Blue Pearl Tinsel", "Hollow Braided Pearl Mylar Tubing", "Siver Tinsel", "Gray Antron", "Danville Fluoro Green Color 504 Nylon Chenille", "Purple Rayon Chenille", "Danville Yellow Color 2 Rayon Chenille", "Bright Green Rayon Floss", "Black Antron", "Moose Fur", "Claret Floss", "Golden Olive Floss", "Dark Ginger Hackle Feather", "Light Brown Wool", "Light Beige Sparkle Yarn", "Black Lacquered Copper Wire", "Copper Wire", "Red Copper Wire", "Mylar Clear Larva Lace", "White Antron", "Yellow Antron", "Olive Yellow Antron", "Light Olive Larva Lace", "Light Avocado Floss", "Hare Fur", "Red Metallic Tinsel", "Chartreuse Copper Wire", "Swannundaze Color 78 Light Olive", "Brown Larva Lace", "Green Copper Wire", "Black Thread", "Silver Tinsel", "Black Dyed Hare Fur", "Apricot Supreme Alaskan Roe Globug Yarn", "Apricot Supreme Steelhead Orange Globug Yarn", "Cream Delight Steelhead Orange Globug Yarn", "Alaskan Roe Globug Yarn", "Steelhead Orange Globug Yarn", "Flame Globug Yarn", "Oregon Cheese Steelhead Orange Globug Yarn", "Peachy King Deep Dark Red Globug Yarn", "Peachy King Flame Globug Yarn", "Chartreuse Cherise Globug Yarn", "Salmon Egg Deep Dark Red Globug Yarn", "Shrimp Pink Flame Globug Yarn", "Champagne Steelhead Orange Globug Yarn", "Champagne Flame Globug Yarn", "White Deep Dark Red Globug Yarn", "Steelhead Orange Deep Dark Red Globug Yarn", "Bling Apricot Supreme Deep Dark Red Globug Yarn", "Bling Champagne Alaskan Roe Globug Yarn", "Bling Champagne Steelhead Orange Globug Yarn", "Bling Deep Dark Red Globug Yarn", "Bling Apricot Supreme Alaskan Roe Globug Yarn", "Bling Flame Globug Yarn", "Champagne Alaskan Roe Globug Yarn", "Bling Niagara Gold Globug Yarn", "Bling Steelhead Orange", "Peachy King  Flame Globug Yarn", "Pink Accent Flash", "Orange Accent Flash", "Dark Tan Polypropylene", "Silver Gray Polypropylene", "Tan Fly- Rite", "Cream Antron", "Olive Wool", "Gray Wool", "Coachman Brown Antron", "Fine Gold Oval Tinsel", "Gold Antron", "Bright Yellow Antron", "Reen Foam Rubber", "Olive Deer Hair", "Bright Green Deer Hair", "Mint Green Deer Hair", "Pale Green Deer Hair", "Red Ultra Wire", "Enameled Copper Wire", "Lime Green Copper Wire", "Light Brown Antron", "Hollow Green Plastic Tubing", "Black Nylon Pearl Larva Lace", "Clear Nylon Pearl Larva Lace", "Rust Scintilla Fibers", "Pheasant Tail Fibers", "Black Monofilament", "Clear Monofilament", "Cream Scintilla Fibers", "Amber Scintilla Fibers", "Olive Scintilla Fibers", "Light Olive Antron", "Red Pheasant Tail Fibers", "Peacock Herl Fiber", "Red Enameled Copper Wire", "Foam-Backed Pearl Tinsel", "Brown Superfine", "Olive Superfine", "Golden Antron", "Olive Hare Fur", "Dark Olive Antron", "Black Copper Wire", "Ice Dub U V Purple", "Olive Rabbit Fur", "Green Ultra Wire", "Peacock Eye Feather Fiber", "Dark Brown", "Furnace Hackle", "Olive", "Gray", "Brown", "Grizzly Hairy", "Light Dun", "Badger Fur", "Black Rooster Hackle", "Brown Rooster Hackle", "Honey Grizzly Hairy Hackle Rooster", "Brown Grizzly Hairy Hackle", "Cochybondhu", "Red", "Cream", "Black Goat Hair", "Olive-Dyed Grizzly Hairy Hackle", "Reddish Brown Hackle", "Black Hackle Fibers", "Honey Grizzly Hairy Hackle", "Honey Grizzly Rooster Hackle", "Soft Black Hackle", "Grizzly Hairy Rooster Hackle", "Light Grizzly Hairy Rooster Hackle", "Dyed-Red Rooster Hackle", "Olive Rooster Hackle", "Olive Saddle Hackle", "Tan Deer Hair", "Dyed Olive", "Ghost White Gray Hackle", "Dun Hackle", "Yellow Hackle Fibers", "Orange", "Mallard Flank Feather", "Pearl Krystal Flash", "Mallard Flank Feather Dyed Blue", "Pheasant Feathers", "Badger Fur Hackle", "Yellow", "Rooster Hackle", "Black Hen Hackle", "Dark Ginger ", "Light Brown Hackle Fibers", "Pheasant Feather Fibers", "Brown Hen", "Dun Feather", "Brown Hen Hackle", "Pheasant Wingcase Material", "Hungarian Partridge Feathers", "Nickel Plated Tungsten", "Gold Wire", "Olive Brown Hackle", "Grizzly Hairy Hackle", "Dark Brown Hackle Polypropylene", "Green Monofilament", "Furnace Hackle", "Olive Monofilament", "Medium Gold Oval Tinsel", "Fine Silver Oval Tinsel", "Medium Oval Gold Tinsel", "Clear Nylon", "Medium Silver Oval Tinsel", "Dark Copper Wire", "Silver Oval Tinsel", "Medium Copper Wire", "Tying Thread", "Green Larva Lace", "Fine Silver Tinsel", "Brown Embroidery Thread", "Fine Flat Gold Tinsel", "Kg Monofilament", "Amber Rayon Floss", "Fluorescent Orange Antron", "Fine Oval Gold Tinsel", "Peacock Herl", "Lime Ultra Wire", "Blue Wire", "Black Deer Hair Fibers", "Peacock Wing Segment Fibers", "Black Dyed Deer Hair Fibers", "Brown Deer Hair Fibers", "Green Plastic Foam", "Brown Foam Plastic", "Pearl Krystal Flash Fibers", "Redworm Red Ultra Chenille", "Earthworm Brown Ultra Chenille", "White Foam Plastic Strip", "Black Foam Plastic Strip", "Olive Foam Plastic Strip", "Flexi-Skin", "Olive Swiss Straw", "Olive Nylon Fabric", "Plastic Film", "Zing Pearl Flashabou", "Blue Pearlescent Mylar Film", "Strand Pearl Flashabou", "Goat Skin", "Black Swiss Straw", "Olive Flashabou", "Copper Mylar", "Gold Tinsel", "Pearl Tinsel", "Pearl Tinsel Film", "Dark Blue Tinsel", "Brown Wool", "Crimson Antron", "Blue Deer Hair", "Gold Mylar Tinsel", "Beige Deer Hair", "Olive Antron Hollow Tubing", "Elk Hair", "Black Flymaster", "Dark Blend Paxton Dubbing", "Dark Gray Ostrich Herl Fibers", "Dubbed Hare Fur", "Dyed-Olive Hare Fur", "Light Brown Arizona Peacock Feathers", "Dark Green Antron", "Chartreuse Antron", "Grey Ice Dub", "Black Hare Fur", "Olive Dyed Hare Fur"];
        this.Tail = ["Dyed Black Bucktail Fibers", "Brown Bucktail Fibers", "Olive Hackle", "Bucktail Fibers", "Brown Grizzly Hairy Hackle Fibers", "Light Dun Hackle Fibers", "Golden Pheasant Tippet", "Golden Pheasant Tippet Fibers", "Gray Marabou", "Badger Fur Hackle Fibers", "Brown Hackle Fibers", "Peacock Sword Fibers", "Black Polypropylene", "Reddish-Brown Rabbit Zonker Strip", "Leather Strip", "Golden Pheasant Tippets", "Black Dyed Squirrel Tail Fibers", "Dyed-Black Squirrel Tail", "Gray Squirrel Tail Fibers", "Gray Squirrel Tail", "Red Hackle Fibers", "Red Squirrel Tail Fibers", "Black Squirrel Tail Fibers", "Olive Hackle Fibers", "Brown Marabou", "Olive Chickabou", "Green Pearl Mylar", "Medium Black Hackles", "Undyed Cream Marabou", "Dyed Brown Squirrel Tail Fibers", "Dyed Olive Hackle Fibers", "Dun Hackle Fibers", "Olive Dyed Maribou", "Bright Orange Marabou", "Mallard Flank Feather Fibers", "Pearl Mylar", "White Marabou Pearl Crystal Flash", "Silicone", "Gray Squirrel Hair", "Peccary Fibers", "Clear Antron Fibers", "Condor Quill Fibers", "Reddish-Brown Goose Biot Fibers", "Olive Marabou Fibers", "Dyed-Olive Condor Quill Fibers", "Dyed-Black Condor Quill Fibers", "Dark Goose Biots", "Dark Green Duck Feather Fibers", "Brown Turkey Biots", "Pheasant Feather Fluff", "Gray Ostrich Fibers", "Dyed Red Pheasant Tail Fibers", "Red-Dyed Hungarian Partridge Feathers Fibers", "Olive Pheasant Tail Fibers", "Mottled Turkey Fibers", "Yellow Condor Quill Fibers", "Moose Hair", "Weka Feather Fibers", "Red Goose Biots", "Light Brown Microfibbets"];
        this.Wing = ["Grizzly Hairy Hackle Tips", "White Calf Tail", "Gray Mallard Quill Segments", "Brown Bucktail", "Blue Dun Hackle Tips", "Mallard Flank Fibers", "White Mallard Segments", "White Calf Tail Fibers", "Brown Elk Hair Fibers", "Gray Mallard Segments", "Mottled Turkey Feather Segments", "Hen Mallard Feather", "White Polypropylene Fibers", "Gray Z-Lon", "Cream Hackle", "Pheasant Tail Feathers", "Jungle Cock Feathers", "Mottled Hen Pheasant Segments", "Elk Hair Fibers", "Turkey Wing Fibers", "Mottled Shimizaiki", "White Polypropylene", "Barred Mallard Flank Feathers", "Green Plastic Film", "Dyed-Brown Mallard Flank Feathers", "Olive-Dyed Grizzly Hairy Hackles", "Dyed-Olive Mallard Flank Feathers", "Pheasant Flank Feathers", "Golden Pheasant Upper Flank Feathers", "Green-Tipped Pheasant Rump Feathers", "Mallard Flank Feathers", "Canary Polypropylene", "Rabbit Fur", "Black Hackles", "Dyed Olive Hackle", "Gray Hackles", "White Rabbit Fur", "Matched Pukeko Feathers", "Badger Fur Hackles", "Brown Mallard Feather Fibers", "Brown Rabbit Fur", "Yellow Hackle", "Grizzly Hairy Hen Hackle Tips", "White Goose Biots", "Grizzly Hairy Hen Hackle", "Turkey Feathers", "White Z-Lon", "Pearl Crystal Flash", "Dyed-Yellow Goose Biots", "Yellow Foam Rubber", "Black-Dyed Mallard", "Dark Turkey Feather Segment", "Brown Swannundaze", "Light Brown Turkey Feather Fibers", "Olive Plastic Film", "Chocolate Swiss Straw", "Pearl Flashabou", "Mottled Turkey Feather", "Mottled Turkey Feather Segment", "Black Mylar", "Silver Metallic Tinsel", "Pheasant Tail Feather", "Hungarian Partridge Feathers", "White Hen Hackle", "Olive-Dyed Mallard Flank Feather Fibers", "Deer Hair Tips", "Deer Hair Tip Fibers", "Pearl Krystal Flash Strands", "Black Deer Hair Tips", "Brown-Dyed Rabbit Fur", "Blue Flashabou", "Purple Krystal Flash", "Lavendar Krystal Flash", "Peacock Herl Fibers", "Peacock Eye Feather Fibers", "Brown"];
        this.Legs = ["Maxima Brown Kilogram Mono", "Black Fiber", "White Rubber", "Dyed Black Turkey Wing Fibers", "Pearl Microfibbets", "Brown Rubber", "Tan Rubber", "Black Rubber", "Mottled Yellow Tubular Foam", "Mottled Gray Hen Hackles", "Red Brown Goose Biot Fibers", "Olive Nylon", "Olive Hackle Stems", "Black Monocord Pieces", "Pearl Crystal Flashside", "Yellow Rubber", "Nickel Bead Eyes", "Brass Bead Eyes", "Metallic Rainbow Multi-Colored Anodized Tungsten", "Silver-Plated Tungsten"];
    }
    //------------------------------------------------------------------------------------
    //info alert
    showAlert() {
        const alert = this.alertCtrl.create({
            title: '- Info -',
            message: 'The Fly Tying Companion makes finding flies to tie for fly-fishing easy! Just insert your materials below, and then hit the "Submit Materials" button to see a list of flies containing those materials. If at any time you want to start over, hit "Reset" at the bottom of the page.',
            buttons: ['OK']
        });
        alert.present();
    }
    //------------------------------------------------------------------------------------
    // this presents a loading screen while flies are loaded from server - uses loading controller
    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
            content: 'Loading Flies...'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 2500); //2.5 second display time
    }
    //------------------------------------------------------------------------------------
    //gets all the flies from database
    getFlies() {
        return new Promise((resolve, reject) => {
            this.flyService.getFlies().map(res => res.json())
                .subscribe(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    resetForm() {
        this.formGroup.reset();
        this.flies = [];
    }
    //------------------------------------------------------------------------------------
    //opens fly details page with specific info on one fly by its ID
    openFlyDetails(fly) {
        this.flyService.getFlyDetails(fly._id)
            .map(res => res.json()).subscribe(data => {
            this.fly = data;
            //console.log(this.fly)
        });
        this.navCtrl.push('FlyDetailsPage', { fly: fly });
    }
    //-----------------------------------------------------------------------------------
    //removes duplicates from an array
    removeDuplicates(value, index, self) {
        return self.indexOf(value) === index;
    }
    //------------------------------------------------------------------------------------
    //grabs materials that are submitted in form on home page
    logMaterials() {
        //concatenate individual arrays from homepage select menus into one array to then
        //search the flies in the database with materials from this concatenated array
        let materialsArray = [];
        materialsArray = materialsArray.concat(this.formGroup.value.headMats, this.formGroup.value.beadMats, this.formGroup.value.threadMats, this.formGroup.value.bodyMats, this.formGroup.value.tailMats, this.formGroup.value.wingMats, this.formGroup.value.legMats);
        //removes null elements from materials array - only left with selected values
        materialsArray = materialsArray.filter(function (array) {
            return array != null && array != "";
        });
        //presents loading function if the user has input materials
        // and our materials array is full
        if (Array.isArray(materialsArray) && materialsArray.length) {
            this.presentLoadingDefault();
        }
        //-------------------------------------------------------------------
        //after materials data is gathered - we access data returned from asynchronous call to db
        //gets data within promise
        this.getFlies().then(data => {
            this.flyObjects = data; //takes data from our response in the getFlies function and assigns to flyObjects var
            //iterates through each fly
            for (var i = 0; i < this.flyObjects.length; i++) {
                //This grabs all material keys values in the materials nested document
                let materialValuesArr = Object.keys(this.flyObjects[i].materials).map(key => this.flyObjects[i].materials[key]);
                //needs refactoring---------------------------------------------------------------------
                //we now loop through both arrays to check if there are matches
                //loop through material values that is defined just above
                for (var x = 0; x < materialValuesArr.length; x++) {
                    //now loop through the array of user input data which is 
                    //matched against the array of materials for each fly
                    //if theres a match - we log the fly object
                    for (var z = 0; z < materialsArray.length; z++) {
                        if (materialsArray[z] === materialValuesArr[x]) {
                            this.flies.push(this.flyObjects[i]);
                        }
                    }
                }
            }
            this.flies = this.flies.filter(this.removeDuplicates);
            //console.log(this.flies);
            //materialsArray = [];
            //this.flies = [];
        });
        this.flies = [];
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Matt/Documents/GitHub/FlyTyingCompanion_UI/src/pages/home/home.html"*/'<ion-header no-border>\n  <ion-navbar color="white">\n    <button color="goldbrown" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button icon-only type="button" (click)="showAlert()" ion-button>\n        <ion-icon color="goldbrown" name="information-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col class="logo-div" col-12>\n          <img src="/assets/imgs/logo_white_background.jpg"/>\n          <hr>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="logo-div" col-12>\n        <img src="/assets/imgs/dry_20fliesmay_flies.jpg"/>\n        <hr>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!---------------------------------------------------------------------------------------------------------->\n\n\n  <!---------------------------------------------------------------------------------------------------------->\n  <!--<form [formGroup]="formGroup" (ngSubmit)="saveMaterials(formGroup.value)">\n  </form>-->\n  <form [formGroup]="formGroup" #flyForm="ngForm" (ngSubmit)="logMaterials(formGroup.value)">\n    <ion-list>\n      <br>\n      <h4>Add Materials</h4>\n      <ion-item>\n        <ion-label>Head</ion-label>\n        <ion-select formControlName="headMats" multiple="true">\n          <ion-option *ngFor="let headMaterials of Head">{{headMaterials}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Beads</ion-label>\n        <ion-select formControlName="beadMats" multiple="true">\n          <ion-option *ngFor="let beadMaterials of Bead">{{beadMaterials}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Thread</ion-label>\n        <ion-select formControlName="threadMats" multiple="true">\n          <ion-option *ngFor="let threadMaterials of Thread">{{threadMaterials}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Body</ion-label>\n        <ion-select formControlName="bodyMats" multiple="true">\n          <ion-option *ngFor="let bodyMaterials of Body">{{bodyMaterials}}</ion-option>\n        </ion-select>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>Tail</ion-label>\n        <ion-select formControlName="tailMats" multiple="true">\n          <ion-option *ngFor="let tailMaterials of Tail">{{tailMaterials}}</ion-option>\n        </ion-select>\n      </ion-item>\n     \n      <ion-item>\n        <ion-label>Wing</ion-label>\n        <ion-select formControlName="wingMats" multiple="true">\n          <ion-option *ngFor="let wingMaterials of Wing">{{wingMaterials}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Legs</ion-label>\n        <ion-select formControlName="legMats" multiple="true">\n          <ion-option *ngFor="let legMaterials of Legs">{{legMaterials}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <!---------------------------------------------------------------------------------------------------------->\n    <!--Buttons-->\n    <!--Submit Button-->\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n        </ion-col>\n        <ion-col col-6>\n          <button color="goldbrown" ion-button type="submit" block>Submit Materials</button>\n        </ion-col>\n        <ion-col col-3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <!--Reset button-->\n  <!--set outside form to minimize multiple submissions when button is clicked-->\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n      </ion-col>\n      <ion-col col-4>\n        <button type="button" ion-button color="goldbrown" (click)="resetForm()" clear>\n          Reset\n          <br>\n          <ion-icon class="ion-padding-end" name="refresh"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n<!---------------------------------------------------------------------------------------------------------->\n<!--Where the results (flies) from form submisson will load dynamically-->\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let fly of flies">\n        <button (click)="openFlyDetails(fly)">\n          <ion-card class="fly-card">\n            <ion-item class="fly-card-name" text-wrap text-center><p><b>{{ fly.flyName }}</b></p></ion-item>\n            <hr>\n            <ion-card-content>\n              <img class="fly-card-image" src="/assets/imgs/FlyPictures/{{fly.image_url}}"/>\n            </ion-card-content>\n          </ion-card>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br>\n  <br>\n  <br>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/Matt/Documents/GitHub/FlyTyingCompanion_UI/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_fly_service_fly_service__["a" /* FlyServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseFliesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fly_service_fly_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//--------------------------------------------------------------------------------------------------
let BrowseFliesPage = class BrowseFliesPage {
    //--------------------------------------------------------------------------------------------------
    constructor(navCtrl, navParams, flyService, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.flyService = flyService;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.flies = [];
        // If we navigated to this page, we will have an item available as a nav param
        this.presentLoadingDefault();
        this.loadFlies();
        this.flyImageURL = "/assets/imgs/FlyPictures/";
    }
    //--------------------------------------------------------------------------------------------------
    // this presents a loading screen while flies are loaded from server - uses loading controller
    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
            content: 'Loading All Flies...'
        });
        loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 1600); //1.6 second display time
    }
    //--------------------------------------------------------------------------------------------------
    //this loads all of the flies from our flyService get request to our API
    loadFlies() {
        this.flyService.getFlies() //uses fly service provider and function getFlies()
            .map(res => res.json()).subscribe(data => {
            this.flies = data;
            //console.log(this.flies)
        });
    }
    //--------------------------------------------------------------------------------------------------
    //this function opens up a Fly Details page with specific fly info based
    //on that fly's ID
    openFlyDetails(fly) {
        this.flyService.getFlyDetails(fly._id)
            .map(res => res.json()).subscribe(data => {
            this.fly = data;
            //console.log(this.fly)
        });
        this.navCtrl.push('FlyDetailsPage', { fly: fly });
    }
};
BrowseFliesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/Matt/Documents/GitHub/FlyTyingCompanion_UI/src/pages/BrowseFlies/BrowseFlies.html"*/'<ion-header no-border>\n    <ion-navbar color="white" text-center justify-content-center>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2>\n            <button color="goldbrown" ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-8>\n            <img class="title-image" alt="logo" height="50" src="/assets/imgs/logo_transparent_background.png">\n          </ion-col>\n          <ion-col col-2>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-navbar>\n  </ion-header>\n\n  <!------------------------------------------------------------------------------------------------------->\n<!--Dynamically Loads all flies from our MongoDB database-->\n<ion-content>\n  <ion-list>\n    <div *ngFor="let fly of flies"> <!--Displays all flies from database-->\n      <button ion-item (click)="openFlyDetails(fly)"> <!--allows the user to click on flies and get fly details page-->\n        <ion-avatar item-left>\n            <img src="/assets/imgs/FlyPictures/{{fly.image_url}}">\n        </ion-avatar>\n        {{ fly.flyName }}\n      </button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Matt/Documents/GitHub/FlyTyingCompanion_UI/src/pages/BrowseFlies/BrowseFlies.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_fly_service_fly_service__["a" /* FlyServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], BrowseFliesPage);

//# sourceMappingURL=BrowseFlies.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(222);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_BrowseFlies_BrowseFlies__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_fly_service_fly_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_BrowseFlies_BrowseFlies__["a" /* BrowseFliesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/fly-details/fly-details.module#FlyDetailsPageModule', name: 'FlyDetailsPage', segment: 'fly-details', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_BrowseFlies_BrowseFlies__["a" /* BrowseFliesPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_fly_service_fly_service__["a" /* FlyServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_BrowseFlies_BrowseFlies__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Browse Flies', component: __WEBPACK_IMPORTED_MODULE_5__pages_BrowseFlies_BrowseFlies__["a" /* BrowseFliesPage */] },
        ];
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Matt/Documents/GitHub/FlyTyingCompanion_UI/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Matt/Documents/GitHub/FlyTyingCompanion_UI/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlyServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//--------------------------------------------------------------------------------------------------
let FlyServiceProvider = class FlyServiceProvider {
    //--------------------------------------------------------------------------------------------------
    constructor(http) {
        this.http = http;
        console.log('Hello FlyServiceProvider Provider');
    }
    //--------------------------------------------------------------------------------------------------
    //grabs all flies - loads them into flies variable
    getFlies() {
        //this.flies = this.http.get('http://localhost:8080/Flies/'); 
        this.flies = this.http.get('https://fly-tying-companion-rest-api.herokuapp.com/Flies');
        return this.flies;
    }
    //--------------------------------------------------------------------------------------------------
    //grabs specific fly by ID - loads into fly variable
    getFlyDetails(id) {
        this.fly = this.http.get('https://fly-tying-companion-rest-api.herokuapp.com/Flies/' + id);
        return this.fly;
    }
};
FlyServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
], FlyServiceProvider);

//# sourceMappingURL=fly-service.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map