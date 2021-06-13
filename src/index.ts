@@ -4,4 +4,215 @@
// The "WA" global object is available from anywhere.

console.log('Script started successfully');
WA.openCoWebSite('https://workadventu.re');
<<<<<<< HEAD
WA.sendChatMessage("Bienvenue sur WorkAdventures, n'hésitez pas à soliciter le staff pour toutes vos questions. Nous esperons que vous allez passer un super moment en notre compagnie.\n Vous pouvez fermer cette fenêtre.", "L'équipe HTH");


let helloWorldPopup: any = WA.onEnterZone('sport1', () => {
  WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
      label: "Merci !",
      className: "primary",
      callback: (popup) => {
          // Close the popup when the "Close" button is pressed.
          popup.close();
      }
  }])
})

WA.onLeaveZone('sport1', () => {
  helloWorldPopup.close();
});

let helloWorldPopup2: any = WA.onEnterZone('sport1', () => {
    WA.openPopup('popup_concert', 'Bienvenue dans la salle de concert !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup2.close();
  });

  let helloWorldPopup3: any = WA.onEnterZone('sport1', () => {
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
<<<<<<< HEAD
=======
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

  let helloWorldPopup4: any = WA.onEnterZone('sport1', () => {
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
>>>>>>> parent of 8892c11 (maj)
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

<<<<<<< HEAD
  let helloWorldPopup4: any = WA.onEnterZone('sport1', () => {
=======
  let helloWorldPopup5: any = WA.onEnterZone('sport1', () => {
>>>>>>> parent of 8892c11 (maj)
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

<<<<<<< HEAD
  let helloWorldPopup5: any = WA.onEnterZone('sport1', () => {
=======
  let helloWorldPopup6: any = WA.onEnterZone('sport1', () => {
>>>>>>> parent of 8892c11 (maj)
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

<<<<<<< HEAD
  let helloWorldPopup6: any = WA.onEnterZone('sport1', () => {
=======
  let helloWorldPopup7: any = WA.onEnterZone('sport1', () => {
>>>>>>> parent of 8892c11 (maj)
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

<<<<<<< HEAD
  let helloWorldPopup7: any = WA.onEnterZone('sport1', () => {
=======
  let helloWorldPopup8: any = WA.onEnterZone('sport1', () => {
>>>>>>> parent of 8892c11 (maj)
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

<<<<<<< HEAD
  let helloWorldPopup8: any = WA.onEnterZone('sport1', () => {
=======
  let helloWorldPopup9: any = WA.onEnterZone('sport1', () => {
>>>>>>> parent of 8892c11 (maj)
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

<<<<<<< HEAD
  let helloWorldPopup9: any = WA.onEnterZone('sport1', () => {
=======
  let helloWorldPopup10: any = WA.onEnterZone('sport1', () => {
>>>>>>> parent of 8892c11 (maj)
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

<<<<<<< HEAD
  let helloWorldPopup10: any = WA.onEnterZone('sport1', () => {
=======
  let helloWorldPopup11: any = WA.onEnterZone('sport1', () => {
>>>>>>> parent of 8892c11 (maj)
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

<<<<<<< HEAD
  let helloWorldPopup11: any = WA.onEnterZone('sport1', () => {
=======
  let helloWorldPopup12: any = WA.onEnterZone('sport1', () => {
>>>>>>> parent of 8892c11 (maj)
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

<<<<<<< HEAD
  let helloWorldPopup12: any = WA.onEnterZone('sport1', () => {
=======
  let helloWorldPopup13: any = WA.onEnterZone('sport1', () => {
>>>>>>> parent of 8892c11 (maj)
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });

<<<<<<< HEAD
  let helloWorldPopup13: any = WA.onEnterZone('sport1', () => {
=======
  let helloWorldPopup14: any = WA.onEnterZone('sport1', () => {
>>>>>>> parent of 8892c11 (maj)
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
<<<<<<< HEAD
  });

  let helloWorldPopup14: any = WA.onEnterZone('sport1', () => {
    WA.openPopup('popup_sport1', 'Bienvenue dans la salle solo : sport !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport1', () => {
    helloWorldPopup.close();
  });
=======
>>>>>>> parent of a342fb4 (up)
=======
  });
>>>>>>> parent of 8892c11 (maj)
