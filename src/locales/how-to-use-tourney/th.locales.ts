import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: quotemark
export const HowToUseTourneyLocaleThai: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - วิธีใช้งาน Tourney',
    description: 'เรียนรู้วิธีใช้งาน Tourney เพื่อคอมมูนิตี้ของคุณ',
  },
  navigationSections: [
    {
      id: 'create_new_accoutn',
      title: 'สร้างแอคเคาท์ใหม่',
      isActive: true,
      navSectionItems: [
        {
          title:
            '1. (ขั้นตอนนี้สำหรับพาร์ทเนอร์ของ game.tv เท่านั้น หากคุณต้องการสร้างทัวร์นาเมนต์ในเซิร์ฟเวอร์ของตัวเอง ข้ามไปดูข้อ 2.) ส่งข้อมูล Discord nickname และ user ID ให้แอดมินของgame.tv',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption: 'Discord nickname รวมถึงตัวเลข 4-หลัก',
              steps: [
                "Discord ID : วิธีดู user ID <a href='https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>",
                'รอให้แอดมินของ game.tv ยืนยันข้อมูลของคุณ แอคเคาท์ของคุณก็จะพร้อมจัดการแข่งขัน',
              ],
            },
          ],
        },
        {
          title:
            "2. ไปที่ <a href='https://esports.game.tv/nimda'>https://esports.game.tv/nimda</a>",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: 'คลิก “Sign in with Discord”',
            },
            {
              imageCaption: 'คลิก “Authorize”',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'ตั้งค่า Tourney Bot ใน Discord Server',
      navSectionItems: [
        {
          title: '1. จากเมนูหลักด้านซ้ายมือ คลิกที่ปุ่ม “Create Tournament”',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. จากหน้าTournament Templates เลือกเกมที่คุณต้องการสร้างทัวร์นาเมนต์แล้วคลิก Customize.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title: '3. ในหน้า Customize Tournament คลิกที่ Add another server',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title:
            '4. Browser จะถูกเปิดขึ้นมาและแสดงหน้า Discord UI ให้คุณเลือกเซิร์ฟเวอร์ที่ต้องการเพิ่ม Bot เข้าไป',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                'เฉพาะเซิร์ฟเวอร์ที่คุณเป็นแอดมินเท่านั้นที่จะแสดงผลในเมนูให้เลือกได้',
                'เลือกเซิร์ฟเวอร์ที่คุณต้องการติดตั้งบอทแล้วคลิกAuthorize',
              ],
            },
          ],
        },
        {
          title:
            '5. เมื่อทำการยินยันครบถ้วนแล้วคุณจะได้รับข้อความยืนยันในหน้าต่างเดิม ทีนี้ Discord Server ของคุณก็พร้อมจัดการแข่งขัน',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title: '6. ลองดูในเซิร์ฟเวอร์เพื่อยืนยันว่าบอทได้รับการติดตั้ง',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(8).png',
            },
          ],
        },
      ],
    },
    {
      id: 'tourney_ai_mode',
      title: 'Tourney AI Mode',
      description:
        '<p>“Tourney AI” จะอนุญาติให้ Tourney AI Bot สร้างและจัดการแข่งขันเองทั้งหมด</p> <p><i>** โปรดทราบ โหมดนี้จะเห็นเฉพาะแอดมินของเซิร์ฟเวอร์เท่านั้น Roles อื่นๆจะไม่สามารถใช้งานได้ </i></p> <p><i>** เฉพาะเกมที่จัดการแข่งแบบสายการแข่งขันเท่านั้นที่รองรับการใช้งาน AI  (ie. PUBG M, Free Fire ไม่สามารถใช้งานได้)</i></p>',
      navSectionItems: [
        {
          title: '1. ที่หน้าแดชบอร์ดจะพบปุ่ม Tourney AI คลิกได้เลย',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title:
            '2. ที่หน้า Bot settings, ก่อนอื่นเลือกเซิร์ฟเวอร์จากเมนูและคลิก Enable AI',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                'คุณสามารถเพิ่ม Tourney Bot เข้าสู่เซิร์ฟเวอร์ที่นี่ หาก Tourney ยังไม่ได้รับการติดตั้ง',
                'คลิกที่ Enable AI จะเปิดเมนูใหม่ให้คุณ',
              ],
            },
          ],
        },
        {
          title: '3. Moderator Setting',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                'Mode moderator : รายชื่อแอดมินของคุณจะแสดงที่นี่ Moderator ทุกคนจะสามารถตั้งค่าได้เป็นเฉพาะ เลือกแอดมินที่คุณต้องการใช้',
                'Roles to mention : ในส่วนนี้ คุณสามารถตั้งค่า AI bot ว่า roles ไหนที่ต้องส่งข้อความไปถึงในการจัดทัวร์นาเมนต์ AI ถ้าคุณไม่กำหนด role บอท AI จะส่งข้อความถึงทุกคนผ่าน @everyone ซึ่งคุณอาจจะไม่ต้องการ',
                'Match Channel Visibility : เลือก role ที่คุณต้องการให้สามารถมองเห็นชาแนล private tournament',
              ],
            },
          ],
        },
        {
          title: '4. Game Settings',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                'Activate Auto Pick : หากเปิดใช้งานฟีเจอร์นี้ AI bot จะเลือกเกมที่เป็นที่นิยมที่สุดในเซิร์ฟเวอร์ของคุณ โดยคุณไม่ต้องเลือกเอง',
                'หากปิดฟีเจอร์นี้ คุณจะต้องเลือกเกมที่คุณต้องการให้ AI จัดการแข่งขันในเซิร์ฟเวอร์ของคุณ และ AI จะจัดทัวร์นาเมนต์จากเกมที่เลือกไว้',
              ],
            },
          ],
        },
        {
          title: '5. Schedule Settings',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                'Automatically Pick Hours : หากเปิดฟีเจอร์นี้ AI bot จะเลือกเวลาจัดการแข่งขันจากเวลาที่มีคนออนไลน์มากที่สุด',
                'หากปิดฟีเจอร์นี้ คุณต้องกำหนดช่วงเวลาที่อยากจัดการแข่งขันและ AI bot จะจัดทัวร์นาเมนต์ในช่วงเวลาที่คุณกำหนด',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'รายการ Discord Commands',
      navSectionItems: [
        {
          title: '1. ใช้งานใน Tournament Lobby',
          innerContentList: [
            {
              steps: [
                '<strong>!register</strong> : เปิดใช้งานกระบวนการลงทะเบียนการแข่งขัน ใช้งานได้ในช่วงเปิดให้ลงทะเบียนเท่านั้น',
                '<strong>!unregister</strong> : ยกเลิกการลงทะเบียนเข้าร่วมการแข่งขัน ใช้ได้ทั้งเดี่ยวและทีม',
                '<strong>!timer</strong> : จะบอกเวลาที่จะเริ่มขั้นตอนถัดไปของทัวร์นาเมนต์ และเหลือเวลาในขั้นตอนปัจจุบันอีกเท่าไร',
                '<strong>!myteam</strong> : แสดงรายชื่อสมาชิกทีมและสถานะ',
              ],
            },
          ],
        },
        {
          title: '2. ใช้งานใน DM กับ Tourney Bot',
          innerContentList: [
            {
              steps: [
                "<strong>!createteam</strong> <b class='highlight'><team name> <ingame username></b> : สร้างทีมที่จะเข้าร่วมการแข่งขัน คุณจะเป็นสมาชิกคนเดียวของทีมจนกว่าจะมีคนใช้รหัสทีมของคุณในการเข้าร่วมการแข่งขัน",
                "<strong>!jointeam</strong> <b class='highlight'><team code> <ingame username></b> : ใช้เข้าร่วมทีมที่มีอยู่แล้ว",
                "<strong>!joinsolo</strong> <b class='highlight'><ingame username></b> : ลงทะเบียนแบบเดี่ยวในทัวร์นาเมนต์",
                "<strong>!checkin</strong> <b class='highlight'><code provided></b> : คำสั่งนี้ใช้ในการเช็คอินเพื่อเข้าแข่งขัน หากมีการกำหนดว่าก่อนแข่งขันต้องเช็คอิน",
              ],
            },
          ],
        },
        {
          title: '3. ใช้ใน Game Lobby',
          innerContentList: [
            {
              steps: [
                "<strong>!result</strong> <b class='highlight'><team name></b> : ใช้ส่งผลการแข่งขันให้บอทตรวจสอบ ต้องส่งสกรีนช็อทหน้าจอเพื่อยืนยันแนบไปด้วย",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: 'สร้างทัวร์นาเมนต์ใหม่',
      description:
        '<i>ขั้นที่ 1)~2) จะเหมือนกับด้านบนในขั้นตอนการติดตั้ง Bot เข้าสู่เซิร์ฟเวอร์ หากคุณติดตั้งบอทแล้วสามารถข้ามไปขั้นที่ 3)</i>',
      navSectionItems: [
        {
          title: '1. จากเมนูหลักด้านซ้ายมือ คลิกที่ปุ่ม “Create Tournament”',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. จากหน้าTournament Templates เลือกเกมที่คุณต้องการสร้างทัวร์นาเมนต์แล้วคลิก Customize.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. ในหน้า Customize Tournamentเลื่อนลงไปด้านล่างเลือก Advanced Settings',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png',
              steps: ['จะมีคำถามเพื่อยืนยัน ก่อนดำเนินการต่อ'],
            },
          ],
        },
        {
          title: '4. ระบุ Basic Info',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png',
              steps: [
                'Tournament Name : ระบุชื่อทัวร์นาเมนต์ ชื่อจะปรากฏใน Category ของ Discord ชื่อจะเป็นตัวอักษรใหญ่ สามารถใช้ Emojis ได้',
                'Game : เลือกเกมแล้วเลือกรูปแบบการแข่งขัน (ex. PUBG M -> Duo) จะเป็นการเลือกทัวร์นาเมนต์แบบ สายการแข่งขันหรือแบบล็อบบี้รวม',
                "Schedule : เลือกช่วงเวลาที่เปิดรับลงทะเบียนร่วมการแข่งขัน และช้ววเวลาการแข่งขัน วันที่และเวลานี้จะปรากฏในด้านล่างของประกาศการแข่งขัน<div class='inner-content'> <p>Registration Start Time : ช่วงเวลาที่จะเริ่มเปิดรับลงทะเบียนเข้าร่วมการแข่งขัน ก่อนช่วงเวลาที่กำหนดระบบจะไม่อนุญาติให้ใช้คำสั่ง “!register” ในชาแนล</p> <p>Registration End Time : หลังจากเวลานี้ จะไม่อนุญาติให้มีการลงทะเบียนเพิ่มเติมอีก ช่วงเวลาสิ้นสุดการลงทะเบียน จะต้องก่อนเวลาเริ่มการแข่งขันอย่างน้อย 10 นาที และคุณจะสามารถสร้างสายการแข่งขันหรือล็อบบี้หลังจากช่ววงเวลาลงทะเบียนสิ้นสุด </p> <p>Tournament Start Time : เวลาเริ่มต้นการแข่งขัน </p> </div>",
                'Stream : หากคุณต้องการแจ้งลิงค์สตรีมการแข่งขัน คลิกที่ “Enable Link” และใส่ข้อมูลสตรีมที่นี่',
                'Region : เลือกประเทศของคุณ ซึ่งจะมีผลต่อภาษาที่แสดงผลในประกาศ (ex. USA -> ประกาศจะเป็นภาษาอังกฤษ)',
              ],
            },
          ],
        },
        {
          title: '5. ระบุข้อมูลใน Details section',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                'Description : คุณสามารถใส่ข้อมูลพื้นฐานของทัวร์นาเมนต์ที่นี่ (ex. วันเวลาแข่งขัน ลงทะเบียน รูปแบบการแข่งขัน เป็นต้น) ข้อมูลเหล่านี้จะถูกแสดงในประกาศด้านล่างชื่อการแข่งขัน',
                'Rules : คุณสามารถระบุกติกาต่างๆที่นี่ (ex. เเบน, เวลาที่กำหนด, best of 3 เป็นต้น) ข้อมูลนี้จะแสดงอยู่ใต้ Description',
                'Prizes : คุณสามารถระบุข้อมูลรางวัลที่นี่ ข้อมูลจะถูกแสดงในประกาศด้านล่าง Rules',
              ],
            },
          ],
        },
        {
          title: '6. ระบุข้อมูลใน Platform section',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                'Choose Platform : เลือก Discord',
                'Discord Server : เลือกเซิร์ฟเวอร์ที่คุณต้องการจัดการแข่งขัน',
                'Roles to Mention : ระบุ Role ที่จะส่งคำเตือนเกี่ยวกับทัวร์นาเมนต์ไปหา',
                'Show to Roles : กำหนด Role ที่จะเห็นชาแนลการแข่งขัน (แนะนำให้กำหนดที่ @everyone นอกจากคุณต้องการจัดทัวร์นาเมนต์แบบจำกัดผู้เข้าร่วม)',
                'Channel Visibility : เมื่อคุณกำหนดสายการแข่งขันหรือสร้างล็อบบี้ บอทจะสร้างชาแนลไพรเวท สำหรับผู้เข้าร่วมการแข่งขัน Role ที่คุณเลือกจะเป็นคนที่สามารถมองเห็นชาแนลดังกล่าวได้ ควรเลือก Role ที่คุณ (tournament admin) ร่วมอยู่ด้วย มิเช่นนั้นคุณจะมองไม่เห็นชาแนลดังกล่าว',
              ],
            },
          ],
        },
        {
          title: '7. ระบุข้อมูล Match Settings section',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                'Tournament Format : ถูกกำหนดตามที่คุณเลือกเอาไว้',
                'Solo Registration (for team events only) : เลือกเพื่อสร้างทีมแบบสุ่มผู้เล่นมารวมกัน',
                'Max Players/Teams Allowed : ระบุจำนวนทีมสูงสุดที่คุณให้เข้าร่วม',
                'Number of Winners : เลือกจำนวนผู้ชนะในการแข่งขัน (1~3)',
                'Check In : เลือกเปิดฟีเจอร์นี้ ถ้าคุณต้องการให้ผู้เข้าร่วมแข่งขันเช็คอินก่อนเริ่มแข่งขัน ผู้เล่นทุกคนต้องเช็คอินก่อนเข้าร่วมการแข่ง',
                'Check In Time : ระบุข้อมูลช่วงเวลาเช็คอินที่คุณต้องการ เวลาพื้นฐานคือ 10 นาที ช่วงวเลาต้องอยู่ระหว่าง เวลาสิ้นสุดลงทะเบียนและเวลาเริ่มการแข่งขัน (ex. ถ้าคุณเลือกกำหนดเวลา 20 เวลาเช็คอินจะเริ่ม 30 นาทีและจบ 10 นาทีก่อนเริ่มการแข่งขัน)',
                'Waitlist : เปิดฟีเจอร์นี้ หากคุณต้องการให้มีรายชื่อสำรอง หากปิดจะรับลงทะเบียนได้เท่าที่กำหนดจำนวนสูงสุดเอาไว้',
                'Automatically Post Results : หากเปิดฟีเจอร์นี้ บอทจะทำหน้าที่ตรวจสอบผลการแข่งขันในทุกรอบ (ex. Team1 ส่งผลการแข่งขันให้ bot -> Bot ถาม Team2 ว่าผลการแข่งขันถูกต้องหรือไม่ -> ถ้า Team2 ไม่ยืนยันผลการแข่งขัน บอทจะให้ Team1 เข้ารอบโดยที่คุณต้องตรวจสอบ) หากผิดฟีเจอร์นี้ คุณต้องตรวจสอบผลการแข่งขันเอง',
                'Allow Incomplete Team (for team events only) : หากเปิดฟีเจอร์นี้ ผู้เข้าแข่งขันสามารถลงทะเบียนได้โดยจำนวนสมาชิกไม่ครบ หากฟีเจอร์นี้ปิด ทีมจะต้องจำนวนสมาชิกครบเท่านั้นจึงจะลงทะเบียนสำเร็จ',
              ],
            },
          ],
        },
        {
          title: '8. คลิกCreate เพื่อดำเนินการ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                'คลิก <i>Create</i> จะไม่ประกาศทัวร์นาเมนต์ออกไปทันที ทัวร์นาเมนต์จะเริ่มประกาศเมื่อคลิก <i>Publish</i> เมื่อการแข่งขันเปลี่ยนสถานะเป็น <i>Publishing</i> ประกาศจะปรากฏใน Discord server คุณสามารถ <i>Publish</i> ภายหลังได้ โดยเลือก <i>Later.</i>',
                'ตรวจสอบข้อมูลต่างๆให้เรียบร้อยก่อน Publish ทัวร์นาเมนต์ เมื่อ Publish แล้วจะไม่สามารถแก้ไขได้อีก',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tournament_dashboard',
      title: 'Tournament Dashboard',
      navSectionItems: [
        {
          title:
            '1. เมื่อสร้างทัวร์นาเมนต์แล้ว คุณจะสามารถเห็นรายชื่อทัวร์นาเมนต์ในรายกานใน Dashboard',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title:
            '2. คลิกที่ทัวร์นาเมนต์เพื่อดูรายละเอียด ผู้เล่นที่ลงทะเบียน สร้างสายการแข่งขันและล็อบบี้ รวมถึงส่งของรางวัล (ฟีเจอร์ Prize ใช้งานได้เฉพาะ game.tv partner ที่จัดใน BlueStacks Discord server.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                'Edit : คุณสามารถแก้ไขข้อมูลโดยใช้ปุ่มนี้ กรุณาจำไว้ว่าการแก้ไขข้อมูลจะไม่แก้ไขข้อมูลที่ประกาศไปแล้วใน Discord Server',
                'Publish / Unpublish : ถ้าคุณสร้างทัวร์นาเมนต์และยังไม่ได้ Publish คุณสามารถกด Publish เพื่อให้ทัวร์นาเมนต์ร่วมทำงาน ถ้าคุณต้องการหยุดทัวร์นาเมนต์ชั่วคราวสามารถกด Unpublish (Unpublish จะไม่ลบทัวร์นาเมนต์หรือประกาศออกจาก Discord)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: 'During Registration Period',
      navSectionItems: [
        {
          title:
            '1. ระหว่างช่วงนี้, ผู้ใช้ Discord จะสามารถลงทะเบียนใน #tournament-lobby โดยพิมพ์ “!register” ในช่วงเวลาลงทะเบียน',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title:
            '2. หลังจากพิมพ์คำสั่ง “!register” ผู้ใช้จะได้รับข้อความจาก Tourney bot ซึ่งจะถามข้อมูลเพิ่มเติม เช่น ID และชื่อทีม',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title:
            '3. เมื่อผู้ใช้ส่งข้อมูลกลับให้ Tourney bot ผ่าน DM จะได้รับข้อความยืนยันการลงทะเบียนจากบอท (ถ้าไม่ได้รับข้อความยืนยันแสดงว่าการลงทะเบียนยังไม่สมบูรณ์ ต้องเริ่มขั้นตอนการลงทะเบียนใหม่) ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                'หลังลงทะเบียนสำเร็จ ผู้เข้าร่วมการแข่งขันจะได้รับ role ใหม่ ชื่อ role จะเป็นชื่อเดียวกับชื่อทัวร์นาเมนต์',
              ],
            },
          ],
        },
        {
          title:
            '4. เมื่อผู้ใช้งานลงทะเบียนเข้าร่วมการแข่งขัน คุณจะสามารถเห็นว่ามีจำนวนผู้ลงทะเบียนกี่คนลงทะเบียนใน Dashboard คุณสามารถตรวจสอบ ชื่อ ลบผู้เข้าแข่งขันหรือทีมออกไปได้',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(29).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(30).png',
            },
          ],
        },
        {
          title:
            '5. ถ้าเปิดเช็คอินไว้ ระบบจะเปิดเช็คอินตามที่กำหนด (ex. หากคุณตั้งเวลาเช็คอิน 30 นาที ช่วงเวลาเช็คอินจะเปิด 30 นาทีก่อนทัวร์นาเมนต์เริ่ม)',
        },
        {
          title:
            '6. ทั้งผู้เข้าร่วมแข่งขันและผู้ที่มีรายชื่อในรายชื่อสำรอง จะได้รับคำเตือนในเช็คอินผ่านข้อความโดย Tourney bot ผู้เข้าร่วมแข่งขันต้องทำตามขั้นตอนเพื่อเช็คอินเข้าร่วมอีเวนท์',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title:
            '7. ผู้ใช้จะได้รับข้อความยืนยันการเช็คอินจาก Tourney Bot เมื่อทำการเช็คอินได้ครบถ้วน',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(32).png',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinating_tournament_bracketed',
      title: 'Coordinating Tournament - Bracketed Competition',
      navSectionItems: [
        {
          title: '1. 3 ข้อกำหนดในการสร้างสายการแข่งขัน',
          innerContentList: [
            {
              steps: [
                'a. ทัวร์นาเมนต์มีผ๔เเข้าร่วมเต็มและไม่มีรายชื่อสำรอง',
                'b. หมดช่วงเวลาลงทะเบียน และไม่เปิดเช็คอิน',
                'c. ช่วงเวลาลงทะเบียนและเวลาเช็คอินสิ้นสุด (10 นาทีก่อนเริ่มทัวร์นาเมนต์)',
              ],
            },
          ],
        },
        {
          title:
            '2. เมื่อข้อกำหนดข้อใดข้อหนึ่งใน 3 ข้อนี้เป็นจริง คุณจะำบปุ่มสร้างสายการแข่งขัน คลิกที่ปุ่มเพื่อสร้างสายการแข่งขัน',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title:
            '3. เมื่อสายการแข่งขันถูกสร้างในระบบ ระบบจะประกาศสายการแข่งขันใร Discord และเเจ้งเตือนให้ผู้เข้าร่วมการแข่งขัน',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(34).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(35).png',
            },
          ],
        },
        {
          title:
            '4. เมื่อสายการแข่งขันถูกสร้าง bot จะสร้างชาแนลสำหรับแต่ละแมตท์ ทุกชาแนลจะเชิญผู้เข้าร่วมการแข่งขันเข้าร่วมเพื่อติดต่อกับผู้เข้าร่วมแข่งขันคนอื่น (ie. แชร์ room code, แชร์ player ID) และเพื่อรายงานผลการแข่ง',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png',
            },
          ],
        },
        {
          title:
            '5. ผูเข้าร่วมการแข่งขันจะต้องรายงานผลในชาแนลโดยใช้คำสั่ง “!result <team name>” และต้องแนบภาพบันทึกหน้าจอไปกับคำสั่ง !result เพื่อให้ข้อมูลครบถ้วน',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: ['เมื่อผลการแข่งขันถูกส่งครบถ้วนบอทจะส่งข้อความยืนยัน'],
            },
          ],
        },
        {
          title:
            '6. เมื่อผลการแข่งขันถูกส่งเข้ามา จุดสีแดงจะปรากฏให้คุณเห็น (tournament admin) เพื่อเตือนว่าผลการแข่งขันถูกส่งเข้ามาแล้ว',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                'ถ้า “Automatically Post Results” เปิด, บอทจะตรวจสอบผลการแข่งขันใน 5 นาที หากไม่มีผลการแข่งขันอื่นถูกส่งเข้ามาแย้งใน 5 นาที บอทจะทำการประกาศผู้ชนะ',
                'ถ้า “Automatically Post Results” ปิด, tคุณจะต้องตรวจสอบและอนุมัติผลการแข่งขันเอง (ie. คลิกที่ผู้ชนะเพื่ออัพเดตผล)',
              ],
            },
          ],
        },
        {
          title:
            '7. เมื่อสายการแข่งขันครบถ้วนและได้ผู้ชนะ บอทจะประกาศผลการแข่งขันโดยอัตโนมัติ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(40).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(41).png',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinating_tournament_lobbied',
      title: 'Coordinating Tournament - Lobbied Competition',
      navSectionItems: [
        {
          title: '1. 3 ข้อกำหนดในการสร้างห้องแข่งขัน',
          innerContentList: [
            {
              steps: [
                'a. ทัวร์นาเมนต์มีผู้เเข้าร่วมเต็มและไม่มีรายชื่อสำรอง',
                'b. หมดช่วงเวลาลงทะเบียน และไม่เปิดเช็คอิน',
                'c. ช่วงเวลาลงทะเบียนและเวลาเช็คอินสิ้นสุด (10 นาทีก่อนเริ่มทัวร์นาเมนต์)',
              ],
            },
          ],
        },
        {
          title:
            '2. เมื่อข้อกำหนดข้อใดข้อหนึ่งใน 3 ข้อนี้เป็นจริง คุณจะพบปุ่มสร้างห้องแข่งขันใต้แท็บล็อบบี้ คลิกเพื่อสร้างห้องหรือล็อบบี้',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title:
            '3. สำหรับทุกล็อบบี้ คลิกที่เมนู 3 เส้น, จากนั้นคลิก Create Channel. เพื่อสร้างชาแนลสำหรับผู้เล่นในแต่ละห้องล็อบบี้',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(43).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(44).png',
            },
          ],
        },
        {
          title:
            '4. หากคุณ (tournament admin) ต้องการส่งข้อความเข้าสู่ล็อบบี้ (ie. รหัสห้องหรือพาสเวิร์ด), คุณสามารถใช้ฟีเจอร์ส่งข้อความในทุกล็อบบี้ ชื่อผู้ส่งจะเป็น Tourney (bot),หากต้องการสื่อสารกับผู้เล่นโดยตรงก็ส่งข้อความออกไปได้เลย (ผู้ส่งจะเป็นชื่อคุณ)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(45).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(46).png',
            },
          ],
        },
        {
          title:
            '5. หากคุณไม่ต้องการสร้างห้องเองให้ผ๔เเล่น คุณสามารถกำหนดให้ผู้เข้าแข่งขันคนใดคนหนึ่งเป็นผู้สร้างห้องและแชร์รหัสห้องหรือพาสเวิร์ดได้',
        },
        {
          title:
            '6. ผู้เข้าร่วมการแข่งขันจะต้องรายงานผลในชาแนลโดยใช้คำสั่ง “!result <team name>” และต้องแนบภาพบันทึกหน้าจอไปกับคำสั่ง !result เพื่อให้ข้อมูลครบถ้วน',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: ['เมื่อผลการแข่งขันถูกส่งครบถ้วนบอทจะส่งข้อความยืนยัน'],
            },
          ],
        },
        {
          title:
            '7. เมื่อผลการแข่งขันถูกส่งเข้ามา จุดสีแดงจะปรากฏให้คุณเห็น (tournament admin) เพื่อเตือนว่าผลการแข่งขันถูกส่งเข้ามาแล้ว คลิกเพื่อดูผลที่ถูกส่งเข้ามาให้ตรวจสอบ',
          innerContentList: [
            {
              imageCaption:
                'คุณไม่ต้องรอให้ผู้เข้าแข่งขันส่งผลเข้ามาก็ได้หากคุณทราบผลการแข่งขันอยู่แล้ว (ie. เช่นคุณทำการดูการแข่งขันตลอดเวลาและทราบผู้ชนะ)',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(47).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(48).png',
            },
          ],
        },
        {
          title: '8. กำหนดผู้ชนะของแต่ละห้องล็อบบี้',
          innerContentList: [
            {
              imageCaption:
                'คลิกที่เมนู 3 เส้น จากนั้นคลิกที่ปุ่ม Record Score',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                'บันทึกผลการแข่งขันตามที่ส่งเข้ามา (ผู้ชนะได้คำแนนสูงสุด)',
                'สำหรับการแข่งแบบหลายรอบ คลิกที่ปุ่ม Create Round ด้านล่าง จากนั้นบันทึกสกอร์เพิ่มเติมตามผล',
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: ['เมื่อเสร็จสิ้นกดที่ Update'],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: 'Transferring Players to New Lobbies',
      navSectionItems: [
        {
          title:
            '1. หากคุณต้องการสร้างห้องล็อบบี้แบบมีการย้ายผผู้เข้าแข่งขันไปห้องใหม่ในรอบต่อไปให้เลือก“Elimination” ใต้ Tournament Format.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                'Lobby Counts : จำนวนล็อบบี้ที่คุณต้องการสร้างในแต่ละรอบ',
                'Team Counts : จำนวนทีมสูงสุดในแต่ละห้องล็อบบี้',
              ],
            },
            {
              imageCaption:
                '<i>* หากคุณสร้างทัวร์นาเมนต์แบบห้องเดี่ยวหรือแบบหลายห้องก็ตาม คุณจะไม่มีตัวเลือกให้สร้างห้องเพิ่มเติมอละไม่สามารถโยกย้ายผู้เข้าแข่งขันไปห้องอื่นๆได้ ตามตัวอย่าง (การแข่งแบบ Multiple Lobbies), ปุ่ม “+” จะหายไป</i>',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title:
            '2. ถ้าเลือก “Elimination” คุณจะสามารถสร้างห้องล็อบบี้เพิ่มได้จนกว่าจะครบจำนวนห้องที่กำหนด',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title:
            '3. เมื่อยังมีจำนวนห้องล็อบบี้ให้สร้างได้ กดที่ “+” เพื่อสร้างห้องล็อบบี้ใหม่ และคุณจะสามารถเคลื่อนย้ายผู้เข้าแข่งขันมาห้แงใหม่ได้',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                'ห้องล็อบบี้ใหม่จะว่างเปล่าเมื่อคุณเริ่มสร้าง',
                'ถ้าต้องการสร้างเพิ่มให้กดที่ "+" อีกครั้ง',
              ],
            },
          ],
        },
        {
          title:
            "4. การเคลื่อนย้ายผู้เล่นไปล็อบบี้ใหม่ คุณต้องสิ้นสุดล็อบบี้เดิมก่อน (กรุณาดูที่<a href='how-to-use-tourney?tab=tournament-lobbied-competition'>Ending a Tournament - Lobbied Competition</a> สำหรับการาิ้รสุดล็อบบี้) จากนั้นคลิกที่ “Edit Lobby” ในล็อบบี้ใหม่",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                '<i>* กรุณาระวังอย่ากดสิ้นสุดการแข่งขันหลังจากที่กดสิ้นสุดล็อบบี้ทั้งหมด หากคุณกดสิ้นสุดทัวร์นาเมนต์แล้วจะไม่สามารถย้ายผู้เข้าแข่งขันได้อีกและทัวร์นาเมนต์จะสิ้นสุดทันที</i>',
              ],
            },
          ],
        },
        {
          title: '5. เลือกล็อบบี้ที่คุณต้องการย้ายผู้เข้าเเข่งขันไป',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                'คุณสามารถเลือกที่ Add Lobby เพื่อทำการโยกย้ายผู้เข้าแข่งขันจากหลายๆล็อบบี้',
                'จากตัวอย่าง Lobby 1 และ Lobby 2 สิ้นสุดการแข่ง Lobby 3ยังใ้งานอยู่ คุณจะสามารถเห็นตัวเลือกเฉพาะ Lobby 1 & 2 ',
              ],
            },
          ],
        },
        {
          title: '6. เลือกตำแหน่งหรือผู้เข้าแข่งขันที่ต้องการโยกย้าย',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                'คุณสามารถเลือกหลายๆตำแหน่ง',
                'ตำแหน่งคืออันดับที่ผู้เข้าแข่งขันทำได้ในล็อบบี้เดิม (Position 1 = อันดับ 1 )',
                'ตัวอย่าง, หากต้องการย้ายผู้เล่น 2 อันดับแรกจาก Lobby 1, คุณสามารถเลือกตำแหน่ง  1 & 2.',
              ],
            },
          ],
        },
        {
          title: '7. เมื่อเลือกครบแล้ว คลิกเซฟและสิ้นสุดการย้ายผู้เข้าแข่งขัน',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(58).png',
            },
          ],
        },
      ],
    },
    {
      id: 'ending_a_tournament_bracketed_competition',
      title: 'Ending a Tournament - Bracketed Competition',
      description:
        'ทัวร์นาเมนต์จะสิ้นสุดอัตโนมัติเมื่อผู้ชนะถูกเลือกในสายการแข่งขันรอบสุดท้าย',
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: 'Ending a Tournament - Lobbied Competition',
      navSectionItems: [
        {
          title:
            '1. เมื่อทุกล็อบบี้ทำการอัพเดตผลการแข่งขันและคะแนนแล้ว เลือกเมนู 3 เส้น และคลิก End Lobby ทำซ้ำในทุกล็อบบี้ (ควรสิ้นสุดล็อบบี้ทันทีที่การแข่งในล็อบบี้เสร็จสิ้น และคุณจะไม่สามารถย้ายผู้เล่นได้หากยังไม่สิ้นสุดล็อบบี้) ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png',
            },
          ],
        },
        {
          title:
            '2. เมื่อทุกล็อบบี้สิ้นสุดการใช้งาน game.tv จะแจ้งคุณกว่าการแข่งขันสิ้นสุดแล้วและประกาศผล ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png',
              steps: [
                'หากคุณต้องการให้ประกาศผลและสิ้นสุดการแข่งขัน คลิกที่ <i>Continue.</i>',
                'หากคุณยังไม่ต้องการสิ้นสุดการแข่งขัน คลิกที่<i>Close.</i> (หากทัวร์นาเมนต์ยังไม่สิ้นสุดผลการแข่งขันจะไม่ถูกประกาศ)',
                'สามารถเลือกสิ้นสุดการแข่งขันและประกาศผลโดยคลิก<i>Close.</i>',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: 'Sending Prizes to Winners',
      description:
        '<p><i>** ฟีเจอร์นี้ใช้งานได้เฉพาะ game.tv partners ที่จัดการแข่งขันใน BlueStacks Discord servers.</i></p>',
      navSectionItems: [
        {
          title:
            '1. เมื่อได้ผู้ชนะและการแข่งขันสิ้นสุดแล้วคุณจะพบรายชื่อผู้ชนะการแข่งขันในแท็บ Prize',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png',
            },
          ],
        },
        {
          title: '2. กรอกข้อมูลสำหรับผู้ชนะแต่ละคน',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png',
              steps: [
                'ตรวจสอบข้อมูลผู้ได้รับรางวัลให้ถูกต้อง (ie. ที่อยู่ ประเภทของรางวัล เป็นต้น)',
                "รางวัลบางประเภทจะไม่สามารถใช้งานในบางพื้นที่ กรุณาดูรายละเอียดที่ <a href='https://www.seagm.com/'>https://www.seagm.com/</a>",
                'คุณสามารถกำหนดรางวัลสำหรับผู้ชนะแต่ละคน (ex. สำหรับ Google Play (US) $20 คุณต้องกำหนดรางวัลเป็น Google Play (US) $10 2 ใบ)',
                "(For NA) In general, we’re okay with spending upto $4 more to find an adequate prize option/amount. For Steam, <div class='inner-content'> - For $5 / $10, please use Steam (Hong Kong) 40 HKD / 80 HKD respectively.<br> - For $20 / $25, please use Steam (Malaysia) RM 80 / RM 100 respectively. </div>",
              ],
            },
          ],
        },
        {
          title: '3. เมื่อข้อมูลครับถ้วนแล้คลิกที่ปุ่ม Send prize',
          innerContentList: [
            {
              steps: [
                'รายการของรางวัลจะถูกส่งมายัง game.tv admin เพื่อตรวจสอบและอนุมัติ',
                'เมื่อรางวัลได้รับการอนุมัติ ผู้ชนะจะได้รับรางวัลทาง DM จาก TOurney Bot ซึ่งมนข้อความจะมีรหัสบัตรเติมเงินหรือรหัสของรางวัล ดูรางวัลที่ส่งสำเร็จแล้วมรแท็บ Prize',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: 'Cloning Existing Tournaments',
      description:
        '<p> การจำลองทัวร์นาเนต์จะทำให้สามารถจัดการแข่งขันแบบเดิมได้ซ้ำๆโดยไม่ต้องระบุข้อมูลใหม่ทุกครั้ง <br /><i>** การจำลองทัวร์นาเมนต์จะไม่สามารถเปลี่ยนโหมดการแข่งขันได้</i> </p>',
      navSectionItems: [
        {
          title:
            '1. เลือกทัวร์นาเมนต์ที่ต้องการจำลองน Dashboard ด้านขวามือคลิกที่เมนู 3 จุด',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png',
              steps: [
                'ถ้าหากทัวร์นาเมนต์สิ้นสุดไปแล้ว ปุ่ม Edit และ Pause จะไม่ทำงาน',
                'ถ้าคุณได้ทำการล้างข้อมูลทัวร์นาเมนต์ไปแล้วปุ่ม Clean up จะไม่ทำงาน',
              ],
            },
          ],
        },
        {
          title:
            '2. คลิกที่ <i>Clone</i>หน้าต่างใหม่จะเปิดขึ้นให้คุณกรอกข้อมูลเล็กน้อย',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png',
              steps: [
                'Tournament Name : คุณต้องกรอกขื่อทัวร์นาเมนต์ใหม่ที่ไม่ซ้ำเดิม',
                'Discord Server : เลือกได้ทั้งเซิร์ฟเวอร์เดิมหรือจะเปลี่ยนเซิร์ฟเวอร์ใหม่ก็ได้',
                'Game : จะมาจากข้อมูบเดิม เลือก Cuztomize เพื่อเปลี่ยนเปลง',
                'Schedule : คุณต้องกำหนดเวลาใหม่',
                'Prizes : Prize จะคงข้อมูลเดิมเอาไว้ สามารถแก้ไขได้',
                'Stream : ะคงข้อมูลเดิมเอาไว้ สามารถแก้ไขได้',
                'Advanced Setting : หากต้องการแก้ไขข้อมูลเพิ่มเติมสามารถคลิกเพื่อแก้ไข',
              ],
            },
          ],
        },
      ],
    },
  ],
};
