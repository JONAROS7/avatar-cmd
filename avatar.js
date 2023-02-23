//avatar cmd
client.on('messageCreate', async(message) => {
  if (message.author.bot)return
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === 'avatar'){
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        const member = message.mentions.users.first() || message.member
              let avatar = member.displayAvatarURL({ size: 1024, dynamic: true });
              const embed = new MessageEmbed()
                .setDescription(`${member}'s Avatar\n\n[**Download**](${avatar})`)
                .setColor("RANDOM")
                .setImage(avatar)
                const button = new MessageButton()
                .setStyle("LINK")
                .setLabel('Download')
                .setURL(avatar)
                const row = new MessageActionRow()
                .addComponents(button)
          message.channel.send({embeds: [embed],components:[row]})

      }
  })