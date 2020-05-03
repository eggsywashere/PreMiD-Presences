var iframe = new iFrame();
let sendback;
function send() {
    iframe.send(sendback);
}
iframe.on("UpdateData", () => {
    const link = document.location;
    if (document.getElementsByTagName("video").length != 0) {
        const video = document.getElementsByTagName("video")[0];
        sendback = {
            audio: false,
            current_time: video.currentTime,
            duration: video.duration,
            paused: video.paused,
            site: link.href
        };
    }
    send();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWZyYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vaWZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFFMUIsSUFBSSxRQUFRLENBQUM7QUFFYixTQUFTLElBQUk7SUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7SUFDM0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUUvQixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ3RELE1BQU0sS0FBSyxHQUFxQixRQUFRLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsUUFBUSxHQUFHO1lBQ1QsS0FBSyxFQUFFLEtBQUs7WUFDWixZQUFZLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDL0IsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztLQUNIO0lBQ0QsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDLENBQUMsQ0FBQyJ9