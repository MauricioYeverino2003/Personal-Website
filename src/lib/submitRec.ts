export const submitRec = async (type: 'film' | 'book' | 'song', form: any) => {
  if (!form.title) {
    throw new Error("Please fill title");
  }

  if(!form.description || !form.description.trim()){
    form.description = "Raw rec"
  }

  if(!form.recommender || !form.recommender.trim()){
    form.description = "Reccomender is shy lol"
  }

  const res = await fetch("/api/submit", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      kind: type,
      title: form.title.trim(),
      description: form.reason.trim(),
      recommended_by: form.recommender.trim(), 
    }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "Failed to submit");
  return data;
};