// Avatars
import felixAvatar from "./avatars/felix.jpg"
import jiAvatar from "./avatars/ji.jpg"
import majaAvatar from "./avatars/maja.jpg"
import buchAvatar from "./avatars/buch.jpg"
import ankitAvatar from "./avatars/ankit.jpg"
import scottAvatar from "./avatars/scott.jpg"
import jennaAvatar from "./avatars/jenna.jpg"
import aliceAvatar from "./avatars/alice.jpg"
import vincentAvatar from "./avatars/vincent.jpg"
import benHughesAvatar from "./avatars/ben.jpg"
import alfredAvatar from "./avatars/alfred.jpg"
import henryAvatar from "./avatars/henry.jpg"
import sophieAvatar from "./avatars/sophie.jpg"
import carloAvatar from "./avatars/carlo.jpg"
import jordanAvatar from "./avatars/jordan.jpg"
import yashAvatar from "./avatars/yash.jpg"
import kiranAvatar from "./avatars/kiran.jpg"
import annyAvatar from "./avatars/anny.jpg"
import gregAvatar from "./avatars/greg.jpg"
import lalitAvatar from "./avatars/lalit.jpg"
import slimAvatar from "./avatars/slim.jpg"
import jakeAvatar from "./avatars/jake.jpg"
import marvinAvatar from "./avatars/marvin.jpg"
import fuzzyAvatar from "./avatars/fuzzy.jpg"
import zenoAvatar from "./avatars/zeno.jpg"
import jaimAvatar from "./avatars/jaim.jpg"
import averyAvatar from "./avatars/avery.jpg"
import danAvatar from "./avatars/dan.jpg"
import jennieAvatar from "./avatars/jennie.jpg"
import mingyiAvatar from "./avatars/mingyi.jpg"
import stephenAvatar from "./avatars/stephen.jpg"
import davidAvatar from "./avatars/david.jpg"
import ivanAvatar from "./avatars/ivan.jpg"
import geoffAvatar from "./avatars/geoff.jpg"
import peterAvatar from "./avatars/peter.jpg"
import kimAvatar from "./avatars/kim.jpg"
import jeremiahAvatar from "./avatars/jeremiah.jpg"
import ronAvatar from "./avatars/ron.jpg"
import ekanthAvatar from "./avatars/ekanth.jpg"
import mohiniAvatar from "./avatars/mohini.jpg"
import raviAvatar from "./avatars/ravi.jpg"
import garrettAvatar from "./avatars/garrett.jpg"
import cyAvatar from "./avatars/cy.jpg"
import kenAvatar from "./avatars/ken.jpg"
import makennaAvatar from "./avatars/makenna.jpg"
import bretAvatar from "./avatars/bret.jpg"
import benAvatar from "./avatars/ben.jpg"
import karnAvatar from "./avatars/karn.jpg"
import michaelAvatar from "./avatars/michael.jpg"
import auroraAvatar from "./avatars/aurora.jpg"
import katAvatar from "./avatars/kat.jpg"
import sunnyAvatar from "./avatars/sunny.jpg"
import austinAvatar from "./avatars/austin.jpg"

export interface User {
	name: string
	id: string
	avatarSrc: string
}

export const users: Record<string, User> = {
	maja: {
		name: "Maja Wichrowska",
		id: "maja",
		avatarSrc: majaAvatar.src,
	},
	buch: {
		name: "Abhay Buch",
		id: "buch",
		avatarSrc: buchAvatar.src,
	},
	ankit: {
		name: "Ankit Sardesai",
		id: "ankit",
		avatarSrc: ankitAvatar.src,
	},
	felix: {
		name: "Felix Rieseberg",
		id: "felix",
		avatarSrc: felixAvatar.src,
	},
	ji: {
		name: "Ji Pei",
		id: "ji",
		avatarSrc: jiAvatar.src,
	},
	scott: {
		name: "Scott Sandler",
		id: "scott",
		avatarSrc: scottAvatar.src,
	},
	jenna: {
		name: "Jenna Zeigen",
		id: "jenna",
		avatarSrc: jennaAvatar.src,
	},
	alice: {
		name: "Alice Zhao",
		id: "alice",
		avatarSrc: aliceAvatar.src,
	},
	vincent: {
		name: "Vincent Budrovich",
		id: "vincent",
		avatarSrc: vincentAvatar.src,
	},
	benHughes: {
		name: "Ben Hughes",
		id: "benHughes",
		avatarSrc: benHughesAvatar.src,
	},
	alfred: {
		name: "Alfred Xing",
		id: "alfred",
		avatarSrc: alfredAvatar.src,
	},
	henry: {
		name: "Henry Chiu",
		id: "henry",
		avatarSrc: henryAvatar.src,
	},
	sophie: {
		name: "Sophie Alpert",
		id: "sophie",
		avatarSrc: sophieAvatar.src,
	},
	carlo: {
		name: "Carlo Francisco",
		id: "carlo",
		avatarSrc: carloAvatar.src,
	},
	jordan: {
		name: "Jordan Scales",
		id: "jordan",
		avatarSrc: jordanAvatar.src,
	},
	yash: {
		name: "Yash Gaitonde",
		id: "yash",
		avatarSrc: yashAvatar.src,
	},
	kiran: {
		name: "Kiran Pandit",
		id: "kiran",
		avatarSrc: kiranAvatar.src,
	},
	anny: {
		name: "Anny Yang",
		id: "anny",
		avatarSrc: annyAvatar.src,
	},
	greg: {
		name: "Greg Trowbridge",
		id: "greg",
		avatarSrc: gregAvatar.src,
	},
	lalit: {
		name: "Lalit Kapoor",
		id: "lalit",
		avatarSrc: lalitAvatar.src,
	},
	slim: {
		name: "Slim Lim",
		id: "slim",
		avatarSrc: slimAvatar.src,
	},
	jake: {
		name: "Jake Teton-Landis",
		id: "jake",
		avatarSrc: jakeAvatar.src,
	},
	marvin: {
		name: "Marvin Garcia",
		id: "marvin",
		avatarSrc: marvinAvatar.src,
	},
	fuzzy: {
		name: "Fuzzy Khosrowshahi",
		id: "fuzzy",
		avatarSrc: fuzzyAvatar.src,
	},
	zeno: {
		name: "Zeno Wu",
		id: "zeno",
		avatarSrc: zenoAvatar.src,
	},
	jaim: {
		name: "Jaim Zuber",
		id: "jaim",
		avatarSrc: jaimAvatar.src,
	},
	avery: {
		name: "Avery Crits-Dighe",
		id: "avery",
		avatarSrc: averyAvatar.src,
	},
	dan: {
		name: "Dan Yang",
		id: "dan",
		avatarSrc: danAvatar.src,
	},
	jennie: {
		name: "Jennie Nguyen",
		id: "jennie",
		avatarSrc: jennieAvatar.src,
	},
	mingyi: {
		name: "Mingyi Zhao",
		id: "mingyi",
		avatarSrc: mingyiAvatar.src,
	},
	stephen: {
		name: "Stephen Wu",
		id: "stephen",
		avatarSrc: stephenAvatar.src,
	},
	david: {
		name: "David He",
		id: "david",
		avatarSrc: davidAvatar.src,
	},
	ivan: {
		name: "Ivan Zhao",
		id: "ivan",
		avatarSrc: ivanAvatar.src,
	},
	geoff: {
		name: "Geoff Brooks",
		id: "geoff",
		avatarSrc: geoffAvatar.src,
	},
	peter: {
		name: "Peter Lu",
		id: "peter",
		avatarSrc: peterAvatar.src,
	},
	kim: {
		name: "Kimberly Hsiao",
		id: "kim",
		avatarSrc: kimAvatar.src,
	},
	jeremiah: {
		name: "Jeremiah Fong",
		id: "jeremiah",
		avatarSrc: jeremiahAvatar.src,
	},
	ekanth: {
		name: "Ekanth Sethuramalingam",
		id: "ekanth",
		avatarSrc: ekanthAvatar.src,
	},
	ron: {
		name: "Ron Yehoshua",
		id: "ron",
		avatarSrc: ronAvatar.src,
	},
	mohini: {
		name: "Mohini Thakkar",
		id: "mohini",
		avatarSrc: mohiniAvatar.src,
	},
	ravi: {
		name: "Ravi Menon",
		id: "ravi",
		avatarSrc: raviAvatar.src,
	},
	garrett: {
		name: "Garrett Fidalgo",
		id: "garrett",
		avatarSrc: garrettAvatar.src,
	},
	cy: {
		name: "Chuanying Du",
		id: "cy",
		avatarSrc: cyAvatar.src,
	},
	ken: {
		name: "Ken Chen",
		id: "ken",
		avatarSrc: kenAvatar.src,
	},
	makenna: {
		name: "Makenna Bigelow",
		id: "makenna",
		avatarSrc: makennaAvatar.src,
	},
	ben: {
		name: "Ben Kraft",
		id: "ben",
		avatarSrc: benAvatar.src,
	},
	bret: {
		name: "Bret Scofield",
		id: "bret",
		avatarSrc: bretAvatar.src,
	},
	karn: {
		name: "Karn Saheb",
		id: "karn",
		avatarSrc: karnAvatar.src,
	},
	michael: {
		name: "Michael Leonhard",
		id: "michael",
		avatarSrc: michaelAvatar.src,
	},
	aurora: {
		name: "Aurora Nou",
		id: "aurora",
		avatarSrc: auroraAvatar.src,
	},
	kat: {
		name: "Katherine Huang",
		id: "kat",
		avatarSrc: katAvatar.src,
	},
	sunny: {
		name: "Sunny Li",
		id: "sunny",
		avatarSrc: sunnyAvatar.src,
	},
	austin: {
		name: "Austin Chen",
		id: "austin",
		avatarSrc: austinAvatar.src,
	}
}
