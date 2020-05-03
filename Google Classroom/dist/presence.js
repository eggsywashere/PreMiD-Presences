const presence = new Presence({
    clientId: "632293282847784973"
});
let presenceData = {
    largeImageKey: "logo"
};
let startTimestamp;
presence.on("UpdateData", async () => {
    const path = document.location.pathname.split("/");
    path.shift();
    if (path[0] === "u") {
        path.splice(0, 2);
    }
    if (path[0] === "h") {
        presenceData.details = "Classes";
    }
    else if (path[0] === "calendar") {
        presenceData.details = "Calendar";
    }
    else if (path[0] === "a") {
        presenceData.details = "To-do";
    }
    else if (path[0] === "c") {
        if (!startTimestamp)
            startTimestamp = Date.now();
        const classroom = document.querySelector('span[class="YVvGBb dDKhVc"]')
            ? `${document.querySelector('span[id="UGb2Qe"]').textContent} - ${document.querySelector('span[class="YVvGBb dDKhVc"]').textContent}`
            : document.querySelector('span[id="UGb2Qe"]').textContent;
        presenceData.smallImageKey = "reading";
        presenceData.details = "In class:";
        presenceData.state = classroom;
        presenceData.startTimestamp = startTimestamp;
    }
    else if (path[0] === "s") {
        presenceData.details = "Classroom Settings";
    }
    presence.setActivity(presenceData);
    presenceData = {
        largeImageKey: "logo"
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUM1QixRQUFRLEVBQUUsb0JBQW9CO0NBQy9CLENBQUMsQ0FBQztBQUNILElBQUksWUFBWSxHQUFpQjtJQUMvQixhQUFhLEVBQUUsTUFBTTtDQUN0QixDQUFDO0FBQ0YsSUFBSSxjQUFzQixDQUFDO0FBRTNCLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ25DLE1BQU0sSUFBSSxHQUFhLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbkI7SUFDRCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDbkIsWUFBWSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7S0FDbEM7U0FBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7UUFDakMsWUFBWSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7S0FDbkM7U0FBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDMUIsWUFBWSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDaEM7U0FBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDMUIsSUFBSSxDQUFDLGNBQWM7WUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pELE1BQU0sU0FBUyxHQUFXLFFBQVEsQ0FBQyxhQUFhLENBQzlDLDZCQUE2QixDQUM5QjtZQUNDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxXQUFXLE1BQ3hELFFBQVEsQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxXQUN4RCxFQUFFO1lBQ0osQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDNUQsWUFBWSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDdkMsWUFBWSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7UUFDbkMsWUFBWSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDL0IsWUFBWSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7S0FDOUM7U0FBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDMUIsWUFBWSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztLQUM3QztJQUNELFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsWUFBWSxHQUFHO1FBQ2IsYUFBYSxFQUFFLE1BQU07S0FDdEIsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=