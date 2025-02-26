	import { users } from "./users"

export interface Message {
	from: User
	message: string
	prompt?: string
}

export interface User {
	name: string
	id: string
	avatarSrc: string
}

export const Messages = [
	{
		from: users.buch,
		message: "You're probably wondering what the hell you're looking at. A few weeks ago, I asked you stand in a 'T' pose. What you're now looking at is a 3D model of you, generated from that photo of you. The team has given you a few new outfits to try on. Click on our faces to check them out.",
	},
	{
		from: users.greg,
		message: "Buch! Congrats on a HUGE milestone! Notion wouldn't be where it is today without all your hard work. Thanks for helping Notion (rock) climb to new heights, and for being such a kind, thoughtful colleague to all of us along the way.",
		prompt: `a full-body image of a person wearing a professional rock climbing outfit, standing confidently in an outdoor setting`
	},
	{
		from: users.carlo,
		message: "Buch, congrats on the big 5! When I think of your approach to engineering, I can't help but think of the legendary Rick - existing wholly outside trends, distinctive, and consistent. So glad to be working with you!",
		prompt: `Modify the person in this image to wear a full Rick Owens avant-garde outfit. The look should include:
- A structured, asymmetrical black draped jacket with exaggerated shoulders and raw-edged tailoring.
- High-waisted, wide-leg pants in charcoal gray, tapered sharply at the ankles, with intentional draping.
- Matte black combat boots with chunky soles (Rick Owens 'Mega Lace Boot' style).
- Layering: add a long, slim-fit turtleneck in off-white (ecru) under the jacket for contrast.
- Accessories: thin silver geometric rings, a minimalist crossbody bag in cracked leather, and an oversized hood draped loosely over the head.
Use a monochromatic palette with texture variation (e.g., wool, leather, and sheer layers). Maintain the person's exact face, body proportions, and pose while ensuring the clothing fits seamlessly. Emphasize Rick Owens' signature dark, edgy, and sculptural aesthetic.`
	},
	{
		from: users.alice,
		message: "Happy Anniversary Buch! Your leadership and mentorship make every challenge on the desktop team more fun and rewarding. Wishing you another year filled with growth, success, and well-earned relaxation —hopefully at Sea Ranch with your new robe and fluffy slippers! Appreciate all that you do!",
		prompt: `A ultra-plush fleece robe with "Desktop Rules" styled as a hardcore metal band logo. Fluffy slipper boots that look like tiny sea otters. Oversized sunglasses and touristy ‘I :heart: Sea Ranch’ fanny pack.`
	},
	{
		from: users.ankit,
		message: `Happy 5th notinoversary Buch! Thank you for all the incredible work you do making the desktop app great, for your helpful words of wisdom during our 1:1s, and for your great recommendations on high-end furniture brands. Looking forward to working together for many years!`,
		prompt: `A very fuzzy, long-sleeve, semi-formal blazer-like dark brown jacket that is largely form over function. The jacket has no pockets or zippers, only buttons. It says the letters “B U C H” on the back arranged in a 2x2 grid with low contrast color and Comic Sans font.`
	},
	{
		from: users.aurora,
		message: `Buch, it has been great being coworkers for an entire sprint! Hope you enjoy this coffee-and-cocktails-inspired outfit. Congratulations on five years (and here’s to many more!)!`,
		prompt: `Please texture Buch so that he is wearing a cream-colored fisherman sweater, espresso brown slacks, and whiskey cordovan loafers and belt.`
	},
	{
		from: users.jenna,
		message: `Buch! On my first week here, I remember you had culminated a quest to find the perfect tackle vest for fashion purposes. This commemorates that triumph. Happy five years at Notion!`,
		prompt: `Texture Buch wearing a fishing tackle vest in a medium brown with many pockets over a charcoal gray t-shirt, slim-black jeans, and matte black boots with a sleek profile and thin sole.`
	},
	{
		from: users.anny,
		message: `Happy 5 years Buch!! Thanks for supporting my growth since day 1 and for all of your sagely wisdom when it comes to balancing mindset with grindset at Notion. Cheers to more updates on how the coat game and mosh pits were at the latest concert/warehouse rave you went to, more amazing fits, and more home organization!`,
		prompt: `Texture Buch wearing black doc martens oxfords, straight leg matte black jeans slightly loose around the ankle such that the pants leg gathers over the ankle of the boots. Have Buch wear a black tactical vest underneath a brown leather jacket and a rick-owens style black cape that touches the floor. He should look like he belongs in the Dune movie series.`
	},
	{
		from: users.alfred,
		message: `Congrats on 5 years Buch! Hope this fit keeps you looking cool in the office and in the mosh pit`,
		prompt: `Buch is wearing an unbuttoned long black vinyl trench coat over a black t-shirt, baggy black cargo pants, and black combat boots. He is carrying a black leather briefcase and wearing black oval sunglasses.`
	},
	{
		from: users.jaim,
		message: `Congrats on 5 years at Notion! Buch, you did a great job getting me settled and helping me read the Notion tea leaves. Thanks for all your support building the Desktop Installers.`,
		prompt: `Texture Buch wearing a black concert t-shirt with jeans. The concert was from a Metallica and Jamie XX collaboration`
	},
	{
		from: users.henry,
		message: `Huge congratulations on 5 years Buch! I’m constantly in awe of your unwavering dedication to craft and excellence, both in your work and beyond. I’m incredibly lucky to have the chance to learn from your impeccable taste and perspective—every conversation with you is a refreshing and inspiring experience. Looking forward to working together more!`,
		prompt: `A Berghain-esque outfit. A plain, black T-shirt with a black, muted leather bomber jacket over it. Black Oakley sunglasses. A metal chain belt. Black leather pants with at least 8 zippers. Black combat boots.`
	},
	{
		from: users.jordan,
		message: `I still listen to the prog rock playlist you made me last holiday. Thank you! Been a pleasure having you around and looking forward to many more chats. I've been watching a lot of Suits, but also know you went to a fancy NYC tailor (who was it? I need a rec)`,
		prompt: `Buch wearing a gray Tom Ford suit, brown italian leather shoes. 4K, photo-realistic, trending on ArtStation`
	},
	{
		from: users.sunny,
		message: `Congrats on five years, Buch! I've really appreciated your guidance and patience—I've learned so much from you. Thank you for teaching me the ways of desktop app development. It’s been great working with you, and I’m looking forward to more!`,
		prompt: `Texture Buch wearing a dark green utility jacket with multiple hidden zippers over a white henley shirt, tapered black cargo pants, and polished black leather lace-up boots.`
	},
	{
		from: users.ji,
		message: `Congrats on 5 years! So happy working together with you and more closely as you taking on management. Excited for the organization and momentum you brought to desktop!`,
		prompt: `Texture Buch wearing Alexander McQueen fashion dark gothic suit. With gentle monster sunglasses. 4K ultra-realistic`
	},
	{
		from: users.austin,
		message: `Buch, happy five years! Some of my fondest memories at Notion come from when we were working on all things SQLite together in the Alabama St. office. Now I'm sure most folks don't remember a time when you were a mobile engineer! Your calm, methodical working style has been an inspiration over the years.`,
		prompt: `Texture Buch wearing a gray cashmere sweater with a suede overshirt and dark navy jeans, brown dress shoes.`
	},
	{
		from: users.felix,
		message: `Five years! I'm thankful for the two years you and I now got to work together - and I remain impressed by your zen-like ability to stay calm, thoughtful, and focused on quality. You must have seen Notion go through so many stages in the last five years, growing a little bit with the company at each step - and I'm excited to see how you'll shape Notion for macOS and Windows. Honestly can't wait!`,
		prompt: `Very fancy tuxedo`
	}
]
